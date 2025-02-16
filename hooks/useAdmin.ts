"use client"


import { useState, useCallback, useEffect } from 'react';
import { User } from '../models/User';
import { useAuth } from './useAuth';





export const useAuthor = () => {
  
  const [user, setUser] = useState<User[]>([]);
  
  
  const { token } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  
  console.log('Token in useAdmin:', token); // Log the token value

  const addDoctor = async (username: string, email:string, password:string, specialist:string,workingTime:string) => {
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
        body: JSON.stringify({ username, email, password, specialist,workingTime}),
      });
  
      // Read the response as text first
      const responseText = await response.text();
      console.log("Raw response:", responseText); // Debugging output
      setIsLoading(false);
      if (!response.ok) {
        console.error(`Error creating chat room, status: ${response.status}`);
        throw new Error(`Failed to create chat room: ${response.status}`);
      }
  
      // Check if response is JSON before parsing
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = JSON.parse(responseText);
        console.log("Backend Response:", data);
  
        // Update the chat rooms state
        setUser((prevUsers) => [...prevUsers, data.data]);
      } else {
        console.error("Unexpected response format:", responseText);
      }
    } catch (error) {
      console.error('Error creating chat room:', error);
    }
  };




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
      const users = result.data; // Access the `data` array
      setUser(users || []); // Fallback to empty array if `data` is undefined
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
      setUser([]); // Set to empty array on error
    } finally {
      setIsLoading(false); // Set loading to false
    }
  },[token])

  useEffect(() => {
    if (token) {
      fetchDoctors();
      
    }
  }, [token,fetchDoctors]);




  const deleteDoctor = async (id: string) => {
    setIsLoading(true);
    setError(null);
    if (!token) {
      console.error('Token is missing');
      return null;
    }

    try {
      const response = await fetch(`/api/author/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to delete chat room');
      }
      await fetchDoctors();

      return result; // Return the result for further handling
    } catch (error) {
      console.error('Error deleting chat room:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const updateDoctorStatus = async (id: string, status:boolean ) => {
    setIsLoading(true);
    if (!token) {
      console.error('Token is missing');
      return null;
    }
  
    try {
      const response = await fetch(`/api/author/edit/${id}`, {
        method: 'PUT', // You can also use PATCH if that's more appropriate for partial updates
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to update post status');
      }

      await fetchDoctors();
      
  
      return result;
    } catch (error) {
      console.error('Error updating post status:', error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return { error ,token,updateDoctorStatus,fetchDoctors,deleteDoctor,isLoading,user, addDoctor };
};


