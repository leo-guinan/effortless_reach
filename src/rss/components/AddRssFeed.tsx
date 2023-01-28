const AddRssFeed = () => {
  return (
    <div>
      <label htmlFor="addRssFeed" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="addRssFeed"
          id="addRssFeed"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="https://example.com/rss"
        />
      </div>
    </div>
  )
}

export default AddRssFeed
