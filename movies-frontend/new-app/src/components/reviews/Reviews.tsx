import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import api from "../../api/axiosConfig";

interface Review {
  body: string;
}

interface Movie {
  poster?: string;
}

interface ReviewsProps {
  getMovieData: (movieId: string | undefined) => void;
  movie: Movie | null;
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}

const Reviews: React.FC<ReviewsProps> = ({
  getMovieData,
  movie,
  reviews,
  setReviews,
}) => {
  const revText = useRef<HTMLTextAreaElement>(null);
  const params = useParams<{ movieId: string }>();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [getMovieData, movieId]);

  const addReview = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rev = revText.current;

    if (rev && rev.value) {
      try {
        const response = await api.post("/api/v1/reviews", {
          reviewBody: rev.value,
          imdbId: movieId,
        });

        const updatedReviews = [...reviews, { body: rev.value }];

        rev.value = "";

        setReviews(updatedReviews);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          <>
            <Row>
              <Col>
                <ReviewForm
                  handleSubmit={addReview}
                  revText={revText}
                  labelText="Write a Review?"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </>
          {reviews?.map((r, index) => (
            <React.Fragment key={index}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </React.Fragment>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
