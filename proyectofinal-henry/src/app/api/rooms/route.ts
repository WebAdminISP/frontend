import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_ROOM_API_KEY;

export async function POST(request: Request) {
  const token = request.headers.get('authorization');
  
  if (!token || token !== API_KEY) {
    return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { roomIDs } = await request.json();
    console.log('Recibido array de roomIDs:', roomIDs);
    //cookies().set("token", "data");
    //let token = request.cookies.get('authToken');
    return NextResponse.json({ status: 'success', received: roomIDs });
  } 
  catch (error) {
    if (error instanceof Error) {
        return NextResponse.json({ status: 'error', message: error.message }, { status: 400 });
      } else {
        return NextResponse.json({ status: 'error', message: `Unknown error occurred: ${error}` }, { status: 400 });
      }
    }
  }











