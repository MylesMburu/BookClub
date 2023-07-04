import React from 'react'
import books from './BookData.js';

export const Catalogue = () => {
  return (
    <div className='bg-primary'>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Book ID
            </th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
              Author
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {/* Render table rows dynamically */}
          {books.map((book) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-gray-900">{book.id}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-gray-900">{book.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-gray-900">{book.author}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  )
}
