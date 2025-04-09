
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning';
}

const InfoCard = ({ title, children, variant = 'default' }: InfoCardProps) => {
  return (
    <Card className={`mb-4 ${variant === 'warning' ? 'border-amber-500 bg-amber-50' : ''}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-md flex items-center gap-2">
          {variant === 'warning' && <AlertCircle size={18} className="text-amber-500" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
