'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Play() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={'secondary'} size={'md'} onClick={() => setIsDialogOpen(true)}>
          Live Mode
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-screen w-[100%] bg-primary-500">
        <div className="w-full text-center">Hello</div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
