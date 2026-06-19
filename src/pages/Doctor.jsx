import { useState, useEffect } from 'react'

const KEY = 'doctor-records'

export default function DoctorPage() {
  const [items, setItems] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({'full_name': '', 'specialization_id': '', 'registration_number': '', 'bio': ''})
  const [editing, setEditing] = useState(null)

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem(KEY) || '[]'))
  }, [])

  function persist(next) {
    setItems(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }

  function save() {
    if (editing) persist(items.map(i => i.id === editing ? { ...form, id: editing } : i))
    else persist([...items, { ...form, id: Date.now().toString(36) }])
    setShowForm(false); setEditing(null); setForm({'full_name': '', 'specialization_id': '', 'registration_number': '', 'bio': ''})
  }

  function remove(id) {
    if (!confirm('Delete this record?')) return
    persist(items.filter(i => i.id !== id))
  }

  function edit(item) {
    setForm({ ...item }); setEditing(item.id); setShowForm(true)
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Doctor</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage Doctor records</p>
        </div>
        <button onClick={() => { setShowForm(true); setEditing(null); setForm({'full_name': '', 'specialization_id': '', 'registration_number': '', 'bio': ''}) }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">+ Add Doctor</button>
      </div>
      {showForm && <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"><div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md max-h-[85vh] overflow-y-auto"><h2 className="text-lg font-bold text-gray-900 mb-4">{editing ? 'Edit' : 'New'} Doctor</h2><div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">full_name</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={form['full_name'] || ''} onChange={e => setForm(p => ({...p, 'full_name': e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">specialization_id</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={form['specialization_id'] || ''} onChange={e => setForm(p => ({...p, 'specialization_id': e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">registration_number</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={form['registration_number'] || ''} onChange={e => setForm(p => ({...p, 'registration_number': e.target.value}))} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">bio</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" value={form['bio'] || ''} onChange={e => setForm(p => ({...p, 'bio': e.target.value}))} />
            </div>
</div><div className="flex gap-3 mt-6"><button onClick={save} className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">Save</button><button onClick={() => { setShowForm(false); setEditing(null) }} className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Cancel</button></div></div></div>}
      {items.length === 0 ? <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-2xl"><p className="text-gray-400 text-sm">No Doctor records yet.</p><button onClick={() => setShowForm(true)} className="mt-3 text-blue-600 text-sm font-medium hover:underline">Add the first one</button></div> : <div className="bg-white rounded-2xl border border-gray-200 overflow-x-auto"><table className="w-full min-w-[480px]"><thead className="bg-gray-50 border-b border-gray-200"><tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">full_name</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">specialization_id</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">registration_number</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase">bio</th>
<th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase">Actions</th></tr></thead><tbody className="divide-y divide-gray-100">{items.map(item => <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-700">{String(item['full_name'] ?? '')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{String(item['specialization_id'] ?? '')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{String(item['registration_number'] ?? '')}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{String(item['bio'] ?? '')}</td>
<td className="px-4 py-3 text-right whitespace-nowrap"><button onClick={() => edit(item)} className="text-blue-600 hover:text-blue-800 text-xs font-medium mr-3">Edit</button><button onClick={() => remove(item.id)} className="text-red-500 hover:text-red-700 text-xs font-medium">Delete</button></td></tr>)}</tbody></table></div>}
    </div>
  )
}