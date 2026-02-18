import React, { useState } from 'react'
import { Pencil } from 'lucide-react'
import { dummyUserData } from '../assets/assets'

const ProfileModal = ({setShowEdit}) => {
    const user = dummyUserData

    const [editForm, setEditForm] = useState({
        username: user.username,
        bio: user.bio,
        location: user.location,
        profile_picture: null,
        full_name: user.full_name,
        cover_photo: null,
    })

    const handleSaveProfile = (e) => {
        e.preventDefault()
        console.log(editForm)
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
            <div className="max-w-2xl mx-auto py-6">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">
                        Edit Profile
                    </h1>

                    {/* FORM START */}
                    <form className="space-y-6" onSubmit={handleSaveProfile}>

                        {/* PROFILE PICTURE (NO PENCIL) */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Profile Picture
                            </label>

                            <img
                                src={
                                    editForm.profile_picture
                                        ? URL.createObjectURL(editForm.profile_picture)
                                        : user.profile_picture
                                }
                                alt=""
                                className="w-24 h-24 rounded-full object-cover"
                            />

                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                id="profile_picture"
                                onChange={(e) =>
                                    setEditForm({
                                        ...editForm,
                                        profile_picture: e.target.files[0],
                                    })
                                }
                            />
                        </div>

                        {/* COVER PHOTO (PENCIL ONLY HERE) */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">
                                Cover Photo
                            </label>

                            <div className="relative group w-fit">
                                <img
                                    src={
                                        editForm.cover_photo
                                            ? URL.createObjectURL(editForm.cover_photo)
                                            : user.cover_photo
                                    }
                                    alt=""
                                    className="w-80 h-40 rounded-lg object-cover"
                                />

                                {/* Hover Overlay */}
                                <label
                                    htmlFor="cover_photo"
                                    className="
                    absolute inset-0
                    flex items-center justify-center
                    bg-black/30 rounded-lg
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-200
                    cursor-pointer
                  "
                                >
                                    <Pencil className="w-6 h-6 text-white" />
                                </label>
                            </div>

                            <input
                                type="file"
                                accept="image/*"
                                hidden
                                id="cover_photo"
                                onChange={(e) =>
                                    setEditForm({
                                        ...editForm,
                                        cover_photo: e.target.files[0],
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Name
                            </label>
                            <input type='text' className='w-full p-3 border border-gray-200 rounded-lg'
                                placeholder='Please enter your full name'
                                onChange={(e) => setEditForm({ ...editForm, username: e.target.value })}
                                value={editForm.username} />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Bio
                            </label>
                            <textarea rows={3} className='w-full p-3 border border-gray-200 rounded-lg'
                                placeholder='Please enter a short bio'
                                onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                                value={editForm.bio} />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-1'>
                                Location
                            </label>
                            <input type='text' className='w-full p-3 border border-gray-200 rounded-lg'
                                placeholder='Please enteryour location'
                                onChange={(e) => setEditForm({ ...editForm, location: e.target.value })}
                                value={editForm.location} />
                        </div>

                        <div className='flex justify-end space-x-3 pt-6'>
                            <button onClick={()=>setShowEdit(false)} type='button' className='px-4 py-2 border-gray-300 rounded-lg text-gray-700
                                          hover:bg-gray-50 transition-colors cursor-pointer'>
                                Cancel
                            </button>
                            <button type='submit' className='px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600
                                        text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition
                                         cursor-pointer'>
                                Save Changes
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ProfileModal
