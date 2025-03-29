
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Candidate } from "@/types";
import { Eye, Star, ThumbsUp, ThumbsDown, Mail } from "lucide-react";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const { name, email, skills, score, match, status } = candidate;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'shortlisted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-ats-primary">{name}</CardTitle>
            <CardDescription className="flex items-center">
              <Mail className="h-3 w-3 mr-1" />
              {email}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(status)}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">Match Score</span>
            <span className="text-sm font-medium">{score}%</span>
          </div>
          <Progress value={score} className="h-2" />
        </div>
        
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Skills</p>
          <div className="flex flex-wrap gap-1">
            {skills.slice(0, 5).map((skill, index) => {
              const isMatched = match.some(m => m.skill === skill && m.match);
              const isRequired = match.some(m => m.skill === skill && m.required);
              
              let badgeClass = "text-xs";
              if (isMatched && isRequired) {
                badgeClass += " bg-green-100 text-green-800";
              } else if (isMatched) {
                badgeClass += " bg-blue-100 text-blue-800";
              } else if (isRequired) {
                badgeClass += " bg-red-100 text-red-800";
              } else {
                badgeClass += " bg-gray-100 text-gray-800";
              }
              
              return (
                <Badge key={index} variant="secondary" className={badgeClass}>
                  {skill}
                </Badge>
              );
            })}
            {skills.length > 5 && (
              <Badge variant="outline" className="text-xs">
                +{skills.length - 5} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" size="sm">
          <Eye className="mr-1 h-3 w-3" />
          View
        </Button>
        <div className="flex space-x-1">
          <Button variant="outline" size="sm" className="text-yellow-500">
            <Star className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="text-green-600">
            <ThumbsUp className="h-3 w-3" />
          </Button>
          <Button variant="outline" size="sm" className="text-red-600">
            <ThumbsDown className="h-3 w-3" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;
