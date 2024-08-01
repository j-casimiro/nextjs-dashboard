import { NextResponse } from 'next/server';
import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET() {
  const invoices = await fetchLatestInvoices();

  return NextResponse.json({ invoices });
}
