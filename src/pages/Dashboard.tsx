
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { mockCandidates, mockJobRequirement } from '@/data/mockData';
import CandidateCard from '@/components/CandidateCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserCheck, UserX, User, Users, BriefcaseBusiness } from 'lucide-react';

const Dashboard = () => {
  const totalCandidates = mockCandidates.length;
  const shortlisted = mockCandidates.filter(c => c.status === 'shortlisted').length;
  const rejected = mockCandidates.filter(c => c.status === 'rejected').length;
  const reviewed = mockCandidates.filter(c => c.status === 'reviewed').length;
  const newCandidates = mockCandidates.filter(c => c.status === 'new').length;
  
  // Sort candidates by score (descending)
  const sortedCandidates = [...mockCandidates].sort((a, b) => b.score - a.score);
  
  return (
    <div className="container py-6 animate-fade-in">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Candidates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-ats-primary mr-2" />
              <span className="text-2xl font-bold">{totalCandidates}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Shortlisted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserCheck className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-2xl font-bold">{shortlisted}</span>
              <span className="ml-2 text-sm text-muted-foreground">
                ({Math.round((shortlisted / totalCandidates) * 100)}%)
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <UserX className="h-5 w-5 text-red-600 mr-2" />
              <span className="text-2xl font-bold">{rejected}</span>
              <span className="ml-2 text-sm text-muted-foreground">
                ({Math.round((rejected / totalCandidates) * 100)}%)
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <User className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-2xl font-bold">{newCandidates}</span>
              <span className="ml-2 text-sm text-muted-foreground">
                ({Math.round((newCandidates / totalCandidates) * 100)}%)
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BriefcaseBusiness className="h-5 w-5 mr-2 text-ats-primary" />
              Current Job Opening
            </CardTitle>
            <CardDescription>{mockJobRequirement.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Required Skills</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {mockJobRequirement.requiredSkills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-ats-primary/10 text-ats-primary rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Preferred Skills</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {mockJobRequirement.preferredSkills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium">Minimum Experience</h3>
                <p className="text-sm">{mockJobRequirement.minimumExperience} years</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2">
          <Tabs defaultValue="all">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Candidates</h2>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
                <TabsTrigger value="new">New</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {sortedCandidates.map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </TabsContent>
            
            <TabsContent value="shortlisted" className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {sortedCandidates.filter(c => c.status === 'shortlisted').map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </TabsContent>
            
            <TabsContent value="new" className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {sortedCandidates.filter(c => c.status === 'new').map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </TabsContent>
            
            <TabsContent value="rejected" className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {sortedCandidates.filter(c => c.status === 'rejected').map(candidate => (
                <CandidateCard key={candidate.id} candidate={candidate} />
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
