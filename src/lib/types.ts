export interface PicnicStyle {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface BookingData {
  date: string;
  time: string;
  guestCount: number;
  style: string;
  name: string;
  email: string;
  phone: string;
  extras: string[];
  message: string;
}
