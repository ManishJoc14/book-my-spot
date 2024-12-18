import { ParkingSpotFormData } from "@/components/adminComponents/addParkingForm/parkingSpotSchema";

export const parkingSpots: ParkingSpotFormData[] = [
  {
    spotName: "Spot 101",
    parkingType: "Open Space",
    fullAddress: "123 Main Street",
    startTime: "9:00 AM",
    endTime: "9:00 PM",
    isAvailable: true,
    vehiclesAllowed: ["Car", "Bike"],
    amenities: ["Covered", "EvCharging"],
    costPerUnit: 5,
    rateType: "per hour",
    spotPhotos: [
      "https://img.freepik.com/free-photo/empty-underground-parking-garage_1127-3381.jpg?ga=GA1.1.491433875.1733571796&semt=ais_hybrid",
    ],
    phoneNumber: "123-456-7890",
    email: "spot101@example.com",
  },
  {
    spotName: "Spot 102",
    parkingType: "Covered Garage",
    fullAddress: "456 Elm Street",
    startTime: "6:00 AM",
    endTime: "10:00 PM",
    isAvailable: false,
    vehiclesAllowed: ["Car", "Truck"],
    amenities: ["Lighting", "CctvCameras"],
    costPerUnit: 8,
    rateType: "per day",
    spotPhotos: [
      "https://img.freepik.com/premium-photo/parking-garage-underground_63253-3690.jpg?ga=GA1.1.491433875.1733571796&semt=ais_hybrid",
    ],
    phoneNumber: "987-654-3210",
    email: "spot102@example.com",
  },
  {
    spotName: "Spot 103",
    parkingType: "Multi-Level",
    fullAddress: "789 Pine Street",
    startTime: "7:00 AM",
    endTime: "11:00 PM",
    isAvailable: true,
    vehiclesAllowed: ["Car"],
    amenities: ["Covered", "EvCharging", "Lighting"],
    costPerUnit: 10,
    rateType: "per month",
    spotPhotos: [
      "https://img.freepik.com/premium-photo/group-people-parking-lot_1048944-6810552.jpg?ga=GA1.1.491433875.1733571796&semt=ais_hybrid",
    ],
    phoneNumber: "555-123-4567",
    email: "spot103@example.com",
  },
];
