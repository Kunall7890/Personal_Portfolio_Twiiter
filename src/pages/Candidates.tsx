import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCandidates } from '@/data/mockData';
import { Search, Filter, FileText, Clock, CheckCircle, XCircle, UserCog } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Candidates = () => {
  // Sort candidates by score (descending)
  const sortedCandidates = [...mockCandidates].sort((a, b) => b.score - a.score);
  
  return (
    <div className="container py-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Candidate Management</h1>
        <div className="flex space-x-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search candidates..." 
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="whitespace-nowrap">
            <Filter className="h-4 w-4 mr-1" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Candidates</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
          <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        
        <div className="mt-4 flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="text-sm text-muted-foreground mb-2 sm:mb-0">
            Showing {sortedCandidates.length} candidates
          </p>
          <div className="flex items-center space-x-2">
            <Select defaultValue="score">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Match Score</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="date">Date Added</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="all" className="animate-fade-in">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm">Name</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Skills</th>
                    <th className="text-left p-4 font-medium text-sm">Match</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCandidates.map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.email}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            candidate.score >= 85 ? 'bg-green-500' : 
                            candidate.score >= 70 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}></span>
                          <span className="font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        {candidate.status === 'shortlisted' && (
                          <Badge className="bg-green-100 text-green-800">Shortlisted</Badge>
                        )}
                        {candidate.status === 'rejected' && (
                          <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                        )}
                        {candidate.status === 'reviewed' && (
                          <Badge className="bg-blue-100 text-blue-800">Reviewed</Badge>
                        )}
                        {candidate.status === 'new' && (
                          <Badge className="bg-gray-100 text-gray-800">New</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" title="View Resume">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Review">
                            <UserCog className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-green-600" title="Shortlist">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="shortlisted">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm">Name</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Skills</th>
                    <th className="text-left p-4 font-medium text-sm">Match</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCandidates.filter(c => c.status === 'shortlisted').map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.email}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            candidate.score >= 85 ? 'bg-green-500' : 
                            candidate.score >= 70 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}></span>
                          <span className="font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        {candidate.status === 'shortlisted' && (
                          <Badge className="bg-green-100 text-green-800">Shortlisted</Badge>
                        )}
                        {candidate.status === 'rejected' && (
                          <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                        )}
                        {candidate.status === 'reviewed' && (
                          <Badge className="bg-blue-100 text-blue-800">Reviewed</Badge>
                        )}
                        {candidate.status === 'new' && (
                          <Badge className="bg-gray-100 text-gray-800">New</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" title="View Resume">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Review">
                            <UserCog className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-green-600" title="Shortlist">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviewed">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm">Name</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Skills</th>
                    <th className="text-left p-4 font-medium text-sm">Match</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCandidates.filter(c => c.status === 'reviewed').map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.email}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            candidate.score >= 85 ? 'bg-green-500' : 
                            candidate.score >= 70 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}></span>
                          <span className="font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        {candidate.status === 'shortlisted' && (
                          <Badge className="bg-green-100 text-green-800">Shortlisted</Badge>
                        )}
                        {candidate.status === 'rejected' && (
                          <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                        )}
                        {candidate.status === 'reviewed' && (
                          <Badge className="bg-blue-100 text-blue-800">Reviewed</Badge>
                        )}
                        {candidate.status === 'new' && (
                          <Badge className="bg-gray-100 text-gray-800">New</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" title="View Resume">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Review">
                            <UserCog className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-green-600" title="Shortlist">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm">Name</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Skills</th>
                    <th className="text-left p-4 font-medium text-sm">Match</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCandidates.filter(c => c.status === 'new').map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.email}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            candidate.score >= 85 ? 'bg-green-500' : 
                            candidate.score >= 70 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}></span>
                          <span className="font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        {candidate.status === 'shortlisted' && (
                          <Badge className="bg-green-100 text-green-800">Shortlisted</Badge>
                        )}
                        {candidate.status === 'rejected' && (
                          <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                        )}
                        {candidate.status === 'reviewed' && (
                          <Badge className="bg-blue-100 text-blue-800">Reviewed</Badge>
                        )}
                        {candidate.status === 'new' && (
                          <Badge className="bg-gray-100 text-gray-800">New</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" title="View Resume">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Review">
                            <UserCog className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-green-600" title="Shortlist">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardContent className="p-0">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm">Name</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Skills</th>
                    <th className="text-left p-4 font-medium text-sm">Match</th>
                    <th className="text-left p-4 font-medium text-sm hidden md:table-cell">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCandidates.filter(c => c.status === 'rejected').map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{candidate.name}</p>
                          <p className="text-sm text-muted-foreground">{candidate.email}</p>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {candidate.skills.slice(0, 3).map((skill, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{candidate.skills.length - 3}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                            candidate.score >= 85 ? 'bg-green-500' : 
                            candidate.score >= 70 ? 'bg-yellow-500' : 
                            'bg-red-500'
                          }`}></span>
                          <span className="font-medium">{candidate.score}%</span>
                        </div>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        {candidate.status === 'shortlisted' && (
                          <Badge className="bg-green-100 text-green-800">Shortlisted</Badge>
                        )}
                        {candidate.status === 'rejected' && (
                          <Badge className="bg-red-100 text-red-800">Rejected</Badge>
                        )}
                        {candidate.status === 'reviewed' && (
                          <Badge className="bg-blue-100 text-blue-800">Reviewed</Badge>
                        )}
                        {candidate.status === 'new' && (
                          <Badge className="bg-gray-100 text-gray-800">New</Badge>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="icon" title="View Resume">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Review">
                            <UserCog className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-green-600" title="Shortlist">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-600" title="Reject">
                            <XCircle className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Candidates;
