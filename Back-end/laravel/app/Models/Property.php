<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    protected $fillable = [
        'owner_id',
        'title',
        'description',
        'price',
        'address',
        'type',
        'status'
    ];

    public function features()
    {
        return $this->hasOne(PropertyFeature::class);
    }

    public function images()
    {
        return $this->hasMany(PropertyImage::class);
    }
    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }
}
