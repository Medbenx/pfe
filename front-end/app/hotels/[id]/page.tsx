// app/hotels/[id]/page.tsx
import HotelDetails from '../../components/HotelDetails';
import { hotels } from '../../data/hotelsData';

export default function HotelPage({ params }) {
  const hotel = hotels.find(h => h.id === parseInt(params.id));
  return <HotelDetails hotel={hotel} />;
}