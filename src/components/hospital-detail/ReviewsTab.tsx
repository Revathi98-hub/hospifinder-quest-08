
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ReviewForm from "@/components/ReviewForm";

interface Review {
  user: string;
  rating: number;
  comment: string;
}

interface ReviewsTabProps {
  hospitalId: string;
  reviews: Review[];
  onSubmitReview: (review: { rating: number; comment: string }) => void;
}

const ReviewsTab = ({ hospitalId, reviews, onSubmitReview }: ReviewsTabProps) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const handleSubmitReview = (review: { rating: number; comment: string }) => {
    onSubmitReview(review);
    setShowReviewForm(false);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Patient Reviews</h2>
        <Button 
          onClick={() => setShowReviewForm(true)}
          disabled={showReviewForm}
        >
          Write a Review
        </Button>
      </div>
      
      {showReviewForm && (
        <div className="glass p-6 rounded-xl mb-6">
          <ReviewForm 
            hospitalId={hospitalId}
            onSubmit={handleSubmitReview}
            onCancel={() => setShowReviewForm(false)}
          />
        </div>
      )}
      
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="glass p-6 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-medical-100 flex items-center justify-center text-medical-600 font-medium">
                  {review.user[0]}
                </div>
                <span className="font-medium">{review.user}</span>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < review.rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    )}
                  />
                ))}
              </div>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsTab;
