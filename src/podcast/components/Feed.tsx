import { UserCircleIcon } from "@heroicons/react/20/solid"
import { Fragment, useEffect, useState } from "react"
import { getAntiCSRFToken } from "@blitzjs/auth"


function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

interface Tag {
  name: string
  status: string
}
interface PodcastEpisode {
  id: number
  title: string
  description: string
  link: string
  publishedDate: string
  tags: Tag[]
}

export default function Feed() {

  const [podcasts, setPodcasts] = useState<PodcastEpisode[]>([])
  const antiCSRFToken = getAntiCSRFToken()

  const statusToColor = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    "Not Started": "bg-gray-100 text-gray-800",
    "Complete": "bg-green-100 text-green-800",
  }

  useEffect(() => {
    fetch("/api/backend/podcast_episodes", {
      method: "POST",
      credentials: "include",
      headers: {
        "anti-csrf": antiCSRFToken
      }

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPodcasts(data)

      })
      .catch((err) => {
        console.log(err)
      })

  }, [antiCSRFToken])

  return (
    <div className="flow-root">
      <h1>Podcasts</h1>
      <ul role="list" className="-mb-8">
        {podcasts && podcasts.map((podcast) => (
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
                        href="#"
                        className={classNames(statusToColor[tag.status], "relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm")}
                      >
                        <span className="font-medium text-gray-900">{tag.name}</span>
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
