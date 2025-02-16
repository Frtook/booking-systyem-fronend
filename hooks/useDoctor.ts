import { Appointment } from "@/models/Appointment";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const useDoctor=()=>{

    const [appointment, setAppointment] = useState<Appointment[]>([]);
    const { token } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchAppointments = useCallback(async () => {
        try {
          setIsLoading(true); // Set loading to true
    
          const response = await fetch('/api/author',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`,        },
          });
          const result = await response.json();
          if (!response.ok) {
            setError(result.message)
          }
          const appointments = result.data; // Access the `data` array
          setAppointment(appointments || []); // Fallback to empty array if `data` is undefined
        } catch (error) {

          console.error('Error fetching chat rooms:', error);
          setAppointment([]); // Set to empty array on error
        } finally {
          setIsLoading(false); // Set loading to false
        }
      },[token])
    
      useEffect(() => {
        if (token) {
          fetchAppointments();
          
        }
      }, [token,fetchAppointments]);

      return {appointment,error,isLoading};

}