
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="parsing">Parsing Options</TabsTrigger>
          <TabsTrigger value="scoring">Scoring Configuration</TabsTrigger>
        </TabsList>
        
        <TabsContent value="general" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your ATS general settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" defaultValue="Your Company" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email-notifications">Email Notifications</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="email-notifications" defaultChecked />
                  <Label htmlFor="email-notifications">Receive email notifications for new candidates</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="auto-screening">Automated Screening</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-screening" defaultChecked />
                  <Label htmlFor="auto-screening">Automatically screen resumes upon upload</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="data-retention">Data Retention Period</Label>
                <Select defaultValue="90">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="60">60 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="180">180 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-ats-primary hover:bg-ats-primary/90">Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="parsing" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Resume Parsing Options</CardTitle>
              <CardDescription>Configure how resumes are parsed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="parsing-engine">Parsing Engine</Label>
                <Select defaultValue="advanced">
                  <SelectTrigger>
                    <SelectValue placeholder="Select engine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Parser</SelectItem>
                    <SelectItem value="advanced">Advanced ML Parser</SelectItem>
                    <SelectItem value="custom">Custom Rules</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="extract-contact">Extract Contact Information</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="extract-contact" defaultChecked />
                  <Label htmlFor="extract-contact">Name, email, phone number</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="extract-education">Extract Education</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="extract-education" defaultChecked />
                  <Label htmlFor="extract-education">Degrees, institutions, years</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="extract-skills">Extract Skills</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="extract-skills" defaultChecked />
                  <Label htmlFor="extract-skills">Technical and soft skills</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="extract-experience">Extract Work Experience</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="extract-experience" defaultChecked />
                  <Label htmlFor="extract-experience">Companies, titles, responsibilities</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="custom-keywords">Custom Keywords</Label>
                <Textarea 
                  id="custom-keywords" 
                  placeholder="Enter keywords separated by commas"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-ats-primary hover:bg-ats-primary/90">Save Parsing Options</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="scoring" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Scoring Configuration</CardTitle>
              <CardDescription>Configure how candidates are scored</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="skills-weight">Skills Weight (%)</Label>
                <Input id="skills-weight" type="number" defaultValue={40} min={0} max={100} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience-weight">Experience Weight (%)</Label>
                <Input id="experience-weight" type="number" defaultValue={30} min={0} max={100} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="education-weight">Education Weight (%)</Label>
                <Input id="education-weight" type="number" defaultValue={20} min={0} max={100} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="keywords-weight">Keywords Weight (%)</Label>
                <Input id="keywords-weight" type="number" defaultValue={10} min={0} max={100} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="minimum-score">Minimum Score for Shortlisting (%)</Label>
                <Input id="minimum-score" type="number" defaultValue={70} min={0} max={100} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="auto-shortlist">Auto Shortlist</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="auto-shortlist" />
                  <Label htmlFor="auto-shortlist">Automatically shortlist candidates above minimum score</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-ats-primary hover:bg-ats-primary/90">Save Scoring Configuration</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
