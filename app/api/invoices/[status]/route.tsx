import { NextResponse } from 'next/server';
import { invoices } from '../../../lib/placeholder-data';
import type { NextRequest } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { status: string } }
) {
  try {
    const { status } = params;

    if (status !== 'paid' && status !== 'pending') {
      return NextResponse.json(
        { response: 'Status should only be paid and pending' },
        { status: 500 }
      );
    }

    // Filter invoices based on the status parameter
    const filteredInvoices = invoices.filter(
      invoice => invoice.status === status
    );

    // Return the filtered invoices as JSON response
    return NextResponse.json({ response: filteredInvoices });
  } catch (error) {
    // Handle any errors that might occur
    return NextResponse.json(
      { error: 'Failed to fetch invoices' },
      { status: 500 }
    );
  }
}
