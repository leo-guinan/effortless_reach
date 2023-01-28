import { UserCircleIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"


const podcasts = [
  {
    id: 1,
    title: "The Daily",
    link: "https://www.nytimes.com/column/the-daily",
    description: "The Daily is a news podcast hosted by Michael Barbaro. It is produced by The New York Times and WNYC Studios.",
    image: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png",
    processed: false,
    type: "guest_interview",
    guests: [
      {
        name: "Michael Barbaro",
        link: "https://www.nytimes.com/column/the-daily",
        imageUrl: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png"
      }
    ],
    publishedDate: "2021-01-01T00:00:00.000Z",
    tags: [
      {
        name: "Transcript",
        color: "bg-rose-500",
        href: "https://www.nytimes.com/column/the-daily"

      },
      {
        name: "Key Points",
        color: "bg-indigo-500",
        href: "https://www.nytimes.com/column/the-daily"
      }
    ]
  },
  {
    id: 2,
    title: "The Daily",
    link: "https://www.nytimes.com/column/the-daily",
    description: "The Daily is a news podcast hosted by Michael Barbaro. It is produced by The New York Times and WNYC Studios.",
    image: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png",
    processed: false,
    type: "solo",
    guests: [],
    publishedDate: "2021-01-01T00:00:00.000Z",
    tags: [
      {
        name: "Transcript",
        color: "bg-rose-500",
        href: "https://www.nytimes.com/column/the-daily"

      },
      {
        name: "Key Points",
        color: "bg-indigo-500",
        href: "https://www.nytimes.com/column/the-daily"
      }
    ]
  },
  {
    id: 3,
    title: "The Daily",
    link: "https://www.nytimes.com/column/the-daily",
    description: "The Daily is a news podcast hosted by Michael Barbaro. It is produced by The New York Times and WNYC Studios.",
    image: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png",
    processed: false,
    type: "solo",
    guests: [],
    publishedDate: "2021-01-01T00:00:00.000Z",
    tags: [
      {
        name: "Transcript",
        color: "bg-rose-500",
        href: "https://www.nytimes.com/column/the-daily"

      },
      {
        name: "Key Points",
        color: "bg-indigo-500",
        href: "https://www.nytimes.com/column/the-daily"
      }
    ]
  },
  {
    id: 4,
    title: "The Daily",
    link: "https://www.nytimes.com/column/the-daily",
    description: "The Daily is a news podcast hosted by Michael Barbaro. It is produced by The New York Times and WNYC Studios.",
    image: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png",
    processed: false,
    type: "solo",
    guests: [],
    publishedDate: "2021-01-01T00:00:00.000Z",
    tags: [
      {
        name: "Transcript",
        color: "bg-rose-500",
        href: "https://www.nytimes.com/column/the-daily"

      },
      {
        name: "Key Points",
        color: "bg-indigo-500",
        href: "https://www.nytimes.com/column/the-daily"
      }
    ]
  },
  {
    id: 5,
    title: "The Daily",
    link: "https://www.nytimes.com/column/the-daily",
    description: "The Daily is a news podcast hosted by Michael Barbaro. It is produced by The New York Times and WNYC Studios.",
    image: "https://static01.nyt.com/images/misc/NYT_podcasts_logo.png",
    processed: false,
    type: "solo",
    guests: [],
    publishedDate: "2021-01-01T00:00:00.000Z",
    tags: [
      {
        name: "Transcript",
        color: "bg-rose-500",
        href: "https://www.nytimes.com/column/the-daily"

      },
      {
        name: "Key Points",
        color: "bg-indigo-500",
        href: "https://www.nytimes.com/column/the-daily"
      }
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Feed() {
  return (
    <div className="flow-root">
      <h1>Podcasts</h1>
      <ul role="list" className="-mb-8">
        {podcasts.map((podcast) => (
          <li key={podcast.id}>
            <div className="relative pb-8">
              <div className="relative flex items-start space-x-3">

                <>
                  <div>
                    <div className="relative px-1">
                      <div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                        <UserCircleIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="text-sm text-gray-500">
                      <a href={podcast.link} className="font-medium text-gray-900">
                        {podcast.title}
                      </a>{" "}
                      <span className="whitespace-nowrap">{podcast.publishedDate}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">
                      <p>{podcast.description}</p>
                    </div>
                  </div>
                  {podcast.tags.map((tag) => (
                    <Fragment key={tag.name}>
                      <a
                        href={tag.href}
                        className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                      >
                                <span className="absolute flex flex-shrink-0 items-center justify-center">
                                  <span
                                    className={classNames(tag.color, 'h-1.5 w-1.5 rounded-full')}
                                    aria-hidden="true"
                                  />
                                </span>
                        <span className="ml-3.5 font-medium text-gray-900">{tag.name}</span>
                      </a>{' '}
                    </Fragment>
                  ))}
                </>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
