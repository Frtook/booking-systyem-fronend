"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetDoctorAppointments } from "@/hooks/useDoctor";

export default function Page() {
  const getStatusVariant = (status: boolean) =>
    status ? "default" : "destructive";

  const { data } = useGetDoctorAppointments();
  return (
    <div className="min-h-screen bg-muted/40 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Upcoming Appointments
          </h1>
          <p className="text-muted-foreground mt-2">
            Showing {data?.length} appointments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((appointment) => (
            <Card
              key={appointment.id}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/avatars/01.png" />
                      <AvatarFallback>
                        {appointment.patent.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">
                        {appointment.patent.username}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {appointment.patent.email}
                      </p>
                    </div>
                  </div>
                  <Badge variant={getStatusVariant(appointment.status)}>
                    {appointment.status ? "Confirmed" : "Cancelled"}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Appointment ID</span>
                  <span>#{appointment.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Patient ID</span>
                  <span>#{appointment.patentId}</span>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col items-start gap-2 bg-muted/50 py-4">
                <div className="w-full flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {appointment.appointment_date}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Created:{" "}
                  {new Date(appointment.createdAt).toLocaleDateString()}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
