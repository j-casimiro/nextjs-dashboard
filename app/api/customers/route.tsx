import { NextResponse } from 'next/server';
import { fetchCustomers } from '@/app/lib/data';

export async function GET() {
  const customers = await fetchCustomers();

  return NextResponse.json({ customers });
}
