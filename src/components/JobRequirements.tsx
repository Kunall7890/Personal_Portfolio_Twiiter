
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { X } from "lucide-react";
import { JobRequirement } from "@/types";

const JobRequirements = () => {
  const { toast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [requiredSkill, setRequiredSkill] = useState('');
  const [requiredSkills, setRequiredSkills] = useState<string[]>([]);
  const [preferredSkill, setPreferredSkill] = useState('');
  const [preferredSkills, setPreferredSkills] = useState<string[]>([]);
  const [minimumExperience, setMinimumExperience] = useState(1);
  const [educationLevel, setEducationLevel] = useState<string[]>(['Bachelor\'s Degree']);

  const handleRequiredSkillAdd = () => {
    if (requiredSkill.trim() !== '') {
      setRequiredSkills([...requiredSkills, requiredSkill.trim()]);
      setRequiredSkill('');
    }
  };

  const handlePreferredSkillAdd = () => {
    if (preferredSkill.trim() !== '') {
      setPreferredSkills([...preferredSkills, preferredSkill.trim()]);
      setPreferredSkill('');
    }
  };

  const removeRequiredSkill = (index: number) => {
    setRequiredSkills(requiredSkills.filter((_, i) => i !== index));
  };

  const removePreferredSkill = (index: number) => {
    setPreferredSkills(preferredSkills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || requiredSkills.length === 0) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }

    const jobRequirement: JobRequirement = {
      id: Date.now().toString(),
      title,
      description,
      requiredSkills,
      preferredSkills,
      minimumExperience,
      educationLevel,
    };

    // In a real app, you would save this to a database
    toast({
      title: "Job requirements saved",
      description: "Your job requirements have been successfully saved.",
    });

    console.log("Job requirement created:", jobRequirement);
  };

  return (
    <Card className="w-full max-w-lg mx-auto animate-fade-in">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="text-ats-primary">Define Job Requirements</CardTitle>
          <CardDescription>Set up the criteria for resume screening</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Job Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Frontend Developer"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="We are looking for a skilled Frontend Developer..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requiredSkills">Required Skills</Label>
            <div className="flex space-x-2">
              <Input
                id="requiredSkills"
                value={requiredSkill}
                onChange={(e) => setRequiredSkill(e.target.value)}
                placeholder="React"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleRequiredSkillAdd())}
              />
              <Button type="button" onClick={handleRequiredSkillAdd}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {requiredSkills.map((skill, index) => (
                <Badge key={index} variant="default" className="bg-ats-primary text-white">
                  {skill}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer" 
                    onClick={() => removeRequiredSkill(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredSkills">Preferred Skills</Label>
            <div className="flex space-x-2">
              <Input
                id="preferredSkills"
                value={preferredSkill}
                onChange={(e) => setPreferredSkill(e.target.value)}
                placeholder="TypeScript"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handlePreferredSkillAdd())}
              />
              <Button type="button" onClick={handlePreferredSkillAdd}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {preferredSkills.map((skill, index) => (
                <Badge key={index} variant="outline" className="bg-white text-ats-primary border-ats-primary">
                  {skill}
                  <X 
                    className="ml-1 h-3 w-3 cursor-pointer" 
                    onClick={() => removePreferredSkill(index)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Minimum Experience (years)</Label>
            <Input
              id="experience"
              type="number"
              value={minimumExperience}
              onChange={(e) => setMinimumExperience(Number(e.target.value))}
              min={0}
              max={20}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-ats-primary hover:bg-ats-primary/90">
            Save Requirements
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default JobRequirements;
