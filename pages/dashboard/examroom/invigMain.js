import React from 'react'
import Sidebar from '../../../components/dashComponents/Sidebar'
import InvigAllStudents from '../../../components/dashComponents/invigExamRoom/InvigAllStudents';

export default function envig() {
  return (
    <Sidebar>
      <div>
        <div>
          <InvigAllStudents />
        </div>
      </div>
    </Sidebar>
  )
}
