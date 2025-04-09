
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import * as THREE from 'three';

const HeroSphere = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        color="#4A90E2" 
        roughness={0.2}
      />
    </mesh>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-20 pb-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0" />
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-health-blue/10 text-health-blue mb-6">
            <span className="w-2 h-2 rounded-full bg-health-blue mr-2 animate-pulse" />
            <span className="text-sm font-medium">AI-Powered Health Assistant</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Your Personal <br />
            <span className="text-gradient bg-gradient-to-r from-health-blue to-health-green">
              Health Guardian
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Advanced AI diagnosis and health monitoring at your fingertips. Get accurate symptom analysis and personalized recommendations instantly.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/chat">
              <Button size="lg" className="bg-health-blue hover:bg-health-blue/90 text-white">
                Try Now <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <Heart size={16} className="text-health-blue" />
            <span>Trusted by 10,000+ users worldwide</span>
          </div>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] z-10">
          <Suspense fallback={<div className="h-full w-full flex items-center justify-center">Loading 3D Model...</div>}>
            <div style={{ width: '100%', height: '100%' }}>
              <Canvas>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <HeroSphere />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate />
              </Canvas>
            </div>
          </Suspense>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
