import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Define the Zod schema
const schema = z.object({
    query: z.string().min(5, "Please enter at least 5 characters."),
})

export default function Search() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = (data) => {
        console.log('Search for:', data.query)
        // You can add navigation, API call, etc. here
    }

    return (
        <div
            className="h-[45vh] flex items-center justify-center bg-center bg-cover bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url(/assets/app3.jpg)" }}
        >
            <Card className="w-[800px] shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <form onSubmit={handleSubmit(onSubmit)} className=" flex gap-2">
                        <div className="space-y-2 flex-1">
                            {/* <Label htmlFor="query">Search for Properties</Label> */}
                            <Input
                                id="query"
                                placeholder="e.g., Marrakech, Apartment..."
                                {...register("query")}
                            />
                            {errors.query && (
                                <p className="text-sm text-red-500">{errors.query.message}</p>
                            )}
                        </div>
                        <Button type="submit" className="">
                            Search
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
