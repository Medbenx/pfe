interface Event {
  id: number;
  title: string;
  city: string;
  date: string;
  type: string;
  season: string;
  image: string;
  description: string;
  price: string;
  location: string;
  duration: string;
  website?: string;
  organizer?: string;
  capacity?: string;
  ageRestriction?: string;
  accessibility?: string;
  transportation?: string;
  highlights: string[];
  performers: {
    name: string;
    image: string;
    genre?: string;
    role?: string;
  }[];
  gallery: {
    src: string;
    caption: string;
  }[];
  schedule?: {
    day: string;
    events: {
      time: string;
      title: string;
      location: string;
    }[];
  }[];
  reviews?: {
    user: string;
    rating: number;
    comment: string;
  }[];
}