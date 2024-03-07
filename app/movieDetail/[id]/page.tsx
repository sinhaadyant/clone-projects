import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MovieCarousel";
import { Button } from "@/components/ui/button";
import getImagePath from "@/lib/getImagePath";
import {
  getMovieDetail,
  getPopularMovies,
  getRelatedMovies,
} from "@/lib/getMovies";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
type Props = {
  params: {
    id: string;
  };
};

const MovieDetail = async ({ params: { id } }: Props) => {
  if (!id) notFound();
  const termToUse = decodeURI(id);
  const movie: any = await getMovieDetail(id);
  const popularMovies = await getRelatedMovies(id);

  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div
          className={`min-w-[30%] md:w-full flex justify-center items-center sm:mt-2 xs:mt-2`}
        >
          <Image
            key={movie.id}
            src={getImagePath(movie.poster_path, true)}
            alt=""
            width={400}
            height={225}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/o8z.webp"
          />
        </div>

        <div className="w-full md:w-[70%]">
          <div className="sm:mt-2 mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white ">
            <h2 className="text-5xl font-bold max-w-xl z-40">{movie.title}</h2>
            {movie?.release_date && (
              <p className="max-w-xl line-clamp-3">
                {movie?.status} on {movie?.release_date.split("-")[0]}
              </p>
            )}
            <p className=" z-20 bottom-5 left-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mt-1 text-yellow-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
              </svg>{" "}
              &nbsp; {movie?.vote_average}
              <svg
                className="ml-2 w5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.1 17.6A7.2 7.2 0 0 1 12 21a6.6 6.6 0 0 1-5.8-3c-2.7-4.6.3-8.8.9-9.7A4.4 4.4 0 0 0 8 4c1.3 1 6.4 3.3 5.5 10.6 1.5-1.1 2.7-3 2.9-6.2 1.4 1 4 5.5 1.7 9.2Z"
                />
              </svg>
              &nbsp; {movie?.popularity}
            </p>

            <Button className="uppercase" variant={"secondary"}>
              <svg
                className="mr-2 w5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z"
                  clip-rule="evenodd"
                />
              </svg>

              {movie?.original_language}
            </Button>
            <Button>UA + {movie?.adult == true ? "18" : "9"}</Button>
            <div>
              {movie?.genres?.map((genre: { id: string; name: string }) => (
                <Badge key={genre?.id} className="mr-1">
                  {genre?.name}
                </Badge>
              ))}
            </div>
            <div>
              {movie?.spoken_languages?.map(
                (genre: { iso_639_1: string; english_name: string }) => (
                  <Button
                    key={genre?.iso_639_1}
                    className="mr-1"
                    variant={"destructive"}
                  >
                    {genre?.english_name}
                  </Button>
                )
              )}
            </div>
            <div>
              {movie?.production_companies?.map(
                (genre: { id: string; name: string }) => (
                  <Button key={genre?.id} className="mr-1" variant={"outline"}>
                    {genre?.name}
                  </Button>
                )
              )}
            </div>
            <p className="max-w-xl line-clamp-3 bg-black/[.5] hover:bg-black/[.8] duration-300">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>
      <MoviesCarousel title="You may also like" movies={popularMovies} />
      {/* <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <div key={movie.id} className=" ">
          <Image
            key={movie.id}
            src={getImagePath(movie.backdrop_path, true)}
            alt=""
            width={1920}
            height={1080}
            loading="lazy"
            placeholder="blur"
            blurDataURL="/o8z.webp"
          />

          <div className="hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white ">
            <h2 className="text-5xl font-bold max-w-xl z-40">{movie.title}</h2>
            {movie?.release_date && (
              <p className="max-w-xl line-clamp-3">
                {movie?.status} on {movie?.release_date.split("-")[0]}
              </p>
            )}
            <p className=" z-20 bottom-5 left-5 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mt-1 text-yellow-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
              </svg>{" "}
              &nbsp; {movie?.vote_average}
              <svg
                className="ml-2 w5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.1 17.6A7.2 7.2 0 0 1 12 21a6.6 6.6 0 0 1-5.8-3c-2.7-4.6.3-8.8.9-9.7A4.4 4.4 0 0 0 8 4c1.3 1 6.4 3.3 5.5 10.6 1.5-1.1 2.7-3 2.9-6.2 1.4 1 4 5.5 1.7 9.2Z"
                />
              </svg>
              &nbsp; {movie?.popularity}
            </p>

            <Button className="uppercase" variant={"secondary"}>
              <svg
                className="mr-2 w5 h-5 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z"
                  clip-rule="evenodd"
                />
              </svg>

              {movie?.original_language}
            </Button>
            <Button>UA + {movie?.adult == true ? "18" : "9"}</Button>
            <div>
              {movie?.genres?.map((genre: { id: string; name: string }) => (
                <Badge key={genre?.id} className="mr-1">
                  {genre?.name}
                </Badge>
              ))}
            </div>
            <div>
              {movie?.spoken_languages?.map(
                (genre: { iso_639_1: string; english_name: string }) => (
                  <Button
                    key={genre?.iso_639_1}
                    className="mr-1"
                    variant={"destructive"}
                  >
                    {genre?.english_name}
                  </Button>
                )
              )}
            </div>
            <div>
              {movie?.production_companies?.map(
                (genre: { id: string; name: string }) => (
                  <Button key={genre?.id} className="mr-1" variant={"outline"}>
                    {genre?.name}
                  </Button>
                )
              )}
            </div>
            <p className="max-w-xl line-clamp-3 bg-black/[.5] hover:bg-black/[.8] duration-300">
              {movie.overview}
            </p>
          </div>
        </div>
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div> */}
    </div>
  );
};

export default MovieDetail;
