import { PrismaClient, LeaveType } from "@/lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // --- Placeholder for Doctor IDs ---
  const doctorIds = [
    "5cd1883a-a703-4a76-b5aa-0d9013f5bc88", // Replace with actual doctor ID
    "48d453b0-32a3-4eb5-9102-6ee09d2453df", // Replace with actual doctor ID
    "997b3901-b8b5-45a0-ac42-04cfa60b81cc", // Replace with actual doctor ID
  ];

  // --- Leave Dates ---
  // Note: The script will create overlapping leave requests for the same day
  // for each doctor for demonstration purposes. In a real-world scenario,
  // you would likely only create one leave type per doctor per day.
  const leaveDate = new Date("2025-07-10T00:00:00Z");

  console.log("Setting leave for doctors...");

  // --- Set FULL_DAY Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[0],
      leaveDate: leaveDate,
      leaveType: LeaveType.FULL_DAY,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set FULL_DAY leave for doctor ${
      doctorIds[0]
    } on ${leaveDate.toDateString()}`
  );

  // --- Set MORNING Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[1],
      leaveDate: leaveDate,
      leaveType: LeaveType.MORNING,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set MORNING leave for doctor ${
      doctorIds[1]
    } on ${leaveDate.toDateString()}`
  );

  // --- Set AFTERNOON Leave ---
  await prisma.doctorLeave.create({
    data: {
      doctorId: doctorIds[2],
      leaveDate: leaveDate,
      leaveType: LeaveType.AFTERNOON,
      reason: "Personal leave",
    },
  });
  console.log(
    `Set AFTERNOON leave for doctor ${
      doctorIds[2]
    } on ${leaveDate.toDateString()}`
  );

  console.log("Leave setting finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
