import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Star } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  const handleBooking = () => {
    // This will be connected to Supabase once the integration is set up
    alert("Booking functionality will be connected to the database once Supabase is integrated!");
  };

  // Moroccan Dirham pricing: 700 DH per person per night
  const pricePerPersonPerNight = 700;
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0;
  const subtotal = nights * pricePerPersonPerNight * guests;
  const cleaningFee = 200; // Updated cleaning fee in DH
  const serviceFee = subtotal * 0.05; // Reduced service fee for DH pricing
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <section id="booking" className="py-20 bg-villa-sage/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Book Your Stay
            </h2>
            <p className="text-xl text-muted-foreground">
              Secure your perfect getaway with instant confirmation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Reserve Your Dates</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-villa-gold text-villa-gold" />
                      <span className="text-sm text-muted-foreground">4.9 (127 reviews)</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Check-in</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Check-out</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Guests</Label>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        disabled={guests <= 1}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={guests}
                        onChange={(e) => setGuests(Math.min(8, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="text-center"
                        min="1"
                        max="8"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setGuests(Math.min(8, guests + 1))}
                        disabled={guests >= 8}
                      >
                        +
                      </Button>
                      <Users className="w-4 h-4 text-muted-foreground ml-2" />
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    onClick={handleBooking}
                    disabled={!checkIn || !checkOut}
                  >
                    Reserve Now
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    You won't be charged yet
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Price per person per night</span>
                    <span className="font-semibold">{pricePerPersonPerNight} DH</span>
                  </div>
                  
                  {nights > 0 && (
                    <>
                      <div className="flex justify-between">
                        <span>{pricePerPersonPerNight} DH x {guests} guests x {nights} nights</span>
                        <span className="font-semibold">{subtotal} DH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cleaning fee</span>
                        <span className="font-semibold">{cleaningFee} DH</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span className="font-semibold">{serviceFee.toFixed(2)} DH</span>
                      </div>
                      <hr className="border-border" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-primary">{total.toFixed(2)} DH</span>
                      </div>
                    </>
                  )}
                  
                  {nights === 0 && (
                  <div className="text-center text-muted-foreground py-8">
                    Select your dates to see pricing
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="mt-6 p-6 bg-villa-cream rounded-lg">
              <h3 className="font-semibold text-primary mb-3">What's Included</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Free WiFi & parking</li>
                <li>• Full kitchen access</li>
                <li>• Garden & terrace access</li>
                <li>• Guest support service</li>
                <li>• Welcome amenities</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;