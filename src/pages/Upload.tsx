
import React, { useState } from 'react';
import ResumeUploader from '@/components/ResumeUploader';
import JobRequirements from '@/components/JobRequirements';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Upload = () => {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Resume Processing</h1>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upload">Resume Upload</TabsTrigger>
          <TabsTrigger value="job">Job Requirements</TabsTrigger>
        </TabsList>
        <TabsContent value="upload">
          <ResumeUploader />
        </TabsContent>
        <TabsContent value="job">
          <JobRequirements />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Upload;
