
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileType, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ResumeUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Check if file is PDF
      if (selectedFile.type === 'application/pdf' || 
          selectedFile.type === 'application/msword' || 
          selectedFile.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFile(selectedFile);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF or Word document.",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    setIsLoading(true);
    
    // In a real application, you would upload the file to a server here
    // For this demo, we'll simulate a file upload with a timeout
    setTimeout(() => {
      toast({
        title: "Resume uploaded",
        description: "Your resume has been successfully uploaded and is being processed.",
      });
      setIsLoading(false);
      setFile(null);
    }, 2000);
  };

  return (
    <Card className="w-full max-w-lg mx-auto animate-fade-in">
      <CardHeader>
        <CardTitle className="text-ats-primary">Resume Upload</CardTitle>
        <CardDescription>Upload candidate resumes for analysis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-muted rounded-md hover:border-ats-primary transition-colors">
          <Upload className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-sm text-muted-foreground mb-2">Drag & drop your resume here</p>
          <p className="text-xs text-muted-foreground mb-4">or</p>
          <Input 
            id="resume-upload" 
            type="file" 
            className="hidden" 
            onChange={handleFileChange} 
            accept=".pdf,.doc,.docx"
          />
          <Button asChild variant="outline">
            <label htmlFor="resume-upload" className="cursor-pointer">Browse Files</label>
          </Button>
          {file && (
            <div className="mt-4 flex items-center">
              <FileType className="mr-2 h-4 w-4 text-ats-primary" />
              <span className="text-sm">{file.name}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleUpload} 
          className="w-full bg-ats-primary hover:bg-ats-primary/90" 
          disabled={!file || isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Upload Resume'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResumeUploader;
