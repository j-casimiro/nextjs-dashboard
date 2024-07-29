import { fetchCardData } from '@/app/lib/data';

export async function GET() {
  const data = (await fetchCardData()).data;
  return Response.json({
    message: data,
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedCustomers();
  //   await seedInvoices();
  //   await seedRevenue();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
