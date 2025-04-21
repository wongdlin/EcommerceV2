import { StarIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../utils/classNames';

function Reviews({reviews}) {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              aria-hidden="true"
              className={classNames(
                reviews.average > rating ? "text-gray-900" : "text-gray-200",
                "size-5 shrink-0"
              )}
            />
          ))}
        </div>
        <p className="sr-only">{reviews.average} out of 5 stars</p>
        <a
          href={reviews.href}
          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {reviews.totalCount} reviews
        </a>
      </div>
    </div>
  );
}
export default Reviews;
