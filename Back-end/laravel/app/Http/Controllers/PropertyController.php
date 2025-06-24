<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Property;
use App\Models\PropertyFeature;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PropertyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }
    public function index()
    {

        // We can filter, sort, paginate

        $properties = Property::with(['features', 'images'])

            ->where('status', 'approved') // only show approved

            ->paginate(10);

        return response()->json($properties);
    }

    /**

     * Store a newly created resource in storage.

     */

    public function store(StorePropertyRequest $request)

    {

        // Only owners and admins can create properties? Actually, we want only owners.

        $user = Auth::user();

        if (!in_array($user->role, ['owner', 'admin'])) {

            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $property = Property::create([

            'owner_id' => $user->id,

            'title' => $request->title,

            'description' => $request->description,

            'price' => $request->price,

            'address' => $request->address,

            'type' => $request->type,

            'status' => $user->role === 'admin' ? 'approved' : 'pending', // if admin, auto-approve

        ]);

        // Create property features

        PropertyFeature::create([

            'property_id' => $property->id,

            'bedrooms' => $request->bedrooms,

            'bathrooms' => $request->bathrooms,

            'area' => $request->area,

        ]);

        // Images will be handled in a separate endpoint for file uploads

        return response()->json($property, 201);
    }

    /**

     * Display the specified resource.

     */

    public function show(Property $property)

    {

        $property->load(['features', 'images', 'owner.profile']); // eager load

        return response()->json($property);
    }

    /**

     * Update the specified resource in storage.

     */

    public function update(UpdatePropertyRequest $request, Property $property)

    {

        $user = Auth::user();

        // Only the owner (or admin) can update

        if ($user->id !== $property->owner_id && $user->role !== 'admin') {

            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $property->update($request->only(['title', 'description', 'price', 'address', 'type']));

        // Update features if provided

        if ($request->has('bedrooms') || $request->has('bathrooms') || $request->has('area')) {

            $features = $property->features;

            $features->update([

                'bedrooms' => $request->bedrooms ?? $features->bedrooms,

                'bathrooms' => $request->bathrooms ?? $features->bathrooms,

                'area' => $request->area ?? $features->area,

            ]);
        }

        return response()->json($property);
    }

    /**

     * Remove the specified resource from storage.

     */

    public function destroy(Property $property)

    {

        $user = Auth::user();

        if ($user->id !== $property->owner_id && $user->role !== 'admin') {

            return response()->json(['message' => 'Unauthorized'], 403);
        }

        $property->delete();

        return response()->json(null, 204);
    }
}
