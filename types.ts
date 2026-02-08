
export enum ServiceCategory {
  ELECTRICIAN = 'ইলেকট্রিশিয়ান',
  PLUMBER = 'প্লাম্বার',
  GAS_MECHANIC = 'গ্যাস মিস্ত্রি',
  HOUSE_SHIFTING = 'বাসা বদল',
  DRIVER = 'ড্রাইভার',
  CLEANING = 'পরিচ্ছন্নতা',
  APPLIANCE = 'যন্ত্রপাতি মেরামত',
  PAINTING = 'রং মিস্ত্রি'
}

export interface ServiceProvider {
  id: string;
  name: string;
  category: ServiceCategory;
  rating: number;
  phone: string;
  experience: string;
  description: string;
  imageUrl: string;
  isVerified: boolean;
  distance?: string;
}

// Added ChatMessage interface to support the AIAssistant component's messaging state
export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
