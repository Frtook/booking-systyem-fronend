import { Appointment } from "@/models/Appointment";
import { User } from "@/models/User";
import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const usePatent = ()=>{
        const [appointment, setAppointment] = useState<Appointment[]>([]);
        const [doctor, setDoctor] = useState<User[]>([]);
        const { token } = useAuth();
        const [error, setError] = useState<string | null>(null);
        const [isLoading, setIsLoading] = useState(false);



        const bookAppointment = async (appointment_date: string, doctorId:number) => {
            if (!token) {
              console.error('Token not found in useAdmin');
              return;
            }
          
            try {
              setIsLoading(true);
              const response = await fetch('/api/author/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ appointment_date , doctorId}),
              });
          
              // Read the response as text first
              const responseText = await response.text();
              const result = await response.json();
              console.log("Raw response:", responseText); // Debugging output
              setIsLoading(false);
              if (!response.ok) {
                setError(result.message)
                console.error(`Error booking an appointment, status: ${response.status}`);
                throw new Error(`Failed to create chat room: ${response.status}`);
              }
          
              // Check if response is JSON before parsing
              const contentType = response.headers.get("content-type");
              if (contentType && contentType.includes("application/json")) {
                const data = JSON.parse(responseText);
                console.log("Backend Response:", data);
          
                // Update the chat rooms state
                setAppointment((prevAppointments) => [...prevAppointments, data.data]);
              } else {
                console.error("Unexpected response format:", responseText);
              }
            } catch (error) {
              console.error('Error creating chat room:', error);
            }
          };



          const fetchAppointments = useCallback(async () => {
              try {
                setIsLoading(true); // Set loading to true
          
                const response = await fetch('/api/author',{
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}`,        },
                });
                const result = await response.json(); // Extract the response
                const appointments = result.data; // Access the `data` array
                setAppointment(appointments || []); // Fallback to empty array if `data` is undefined
              } catch (error) {
                console.error('Error fetching chat rooms:', error);
                setAppointment([]); // Set to empty array on error
              } finally {
                setIsLoading(false); // Set loading to false
              }
            },[token])

          const fetchDoctors = useCallback(async () => {
              try {
                setIsLoading(true); // Set loading to true
          
                const response = await fetch('/api/author',{
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                       'Authorization': `Bearer ${token}`,        },
                });
                const result = await response.json(); // Extract the response
                if(!response.ok){
                    setError(result.message)
                }
                const users = result.data; // Access the `data` array
                setDoctor(users || []); // Fallback to empty array if `data` is undefined
              } catch (error) {
                console.error('Error fetching chat rooms:', error);
                setDoctor([]); // Set to empty array on error
              } finally {
                setIsLoading(false); // Set loading to false
              }
            },[token])
          
            useEffect(() => {
              if (token) {
                fetchDoctors();
                fetchAppointments();
                
              }
            }, [token,fetchDoctors,fetchAppointments]);

            return {error,doctor,appointment,bookAppointment,isLoading}

}