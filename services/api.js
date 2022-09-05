import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://oelrwvtzhklfwgdrvgjp.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbHJ3dnR6aGtsZndnZHJ2Z2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODg0OTgsImV4cCI6MTk3Nzk2NDQ5OH0._5b5G8SDCla12UQRSPQBEYuFHzFIlILJtEnaoUzfuYg',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lbHJ3dnR6aGtsZndnZHJ2Z2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjIzODg0OTgsImV4cCI6MTk3Nzk2NDQ5OH0._5b5G8SDCla12UQRSPQBEYuFHzFIlILJtEnaoUzfuYg',
  },
});
