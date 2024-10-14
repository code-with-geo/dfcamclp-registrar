import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Home from "./pages/Home";
import Inquiries from "./pages/Inquiries";
import { AuthProtectedRoutes, ProtectedRoutes } from "./utils/ProtectedRoutes";
import { AuthProvider } from "./context/Auth";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/Home";
import Users from "./pages/dashboard/user/Users";
import AddUser from "./pages/dashboard/user/AddUser";
import { UserProvider } from "./context/Users";
import { DepartmentProvider } from "./context/Departments";
import Departments from "./pages/dashboard/department/Departments";
import AddDepartments from "./pages/dashboard/department/AddDepartments";
import EditDepartment from "./pages/dashboard/department/EditDepartments";
import FAQ from "./pages/dashboard/faqs/FAQ";
import AddFAQ from "./pages/dashboard/faqs/AddFAQ";
import EditFAQ from "./pages/dashboard/faqs/EditFAQ";
import { FAQProvider } from "./context/FAQ";
import InquiryCredential from "./pages/dashboard/inquiry-credentials/InquiryCredential";
import AddInquiryCredential from "./pages/dashboard/inquiry-credentials/AddInquiryCredential";
import EditInquiryCredential from "./pages/dashboard/inquiry-credentials/EditInquiryCredential";
import { InquiryCredentialProvider } from "./context/InquiryCredential";
import { AnnouncementProvider } from "./context/Announcement";
import Announcement from "./pages/dashboard/announcement/Announcement";
import AddAnnouncement from "./pages/dashboard/announcement/AddAnnouncement";
import EditAnnouncement from "./pages/dashboard/announcement/EditAnnouncement";
import EditUser from "./pages/dashboard/user/EditUser";
import InquiryTickets from "./pages/dashboard/tickets/InquiryTickets";
import EditTickets from "./pages/dashboard/tickets/EditTickets";
import { InquiryTicketProvider } from "./context/InquiryTickets";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <DepartmentProvider>
          <UserProvider>
            <FAQProvider>
              <InquiryCredentialProvider>
                <AnnouncementProvider>
                  <InquiryTicketProvider>
                    <Router>
                      <Routes>
                        <Route Route element={<AuthProtectedRoutes />}>
                          <Route path="/login" element={<Login />} />
                        </Route>
                        <Route path="/" element={<Home />} />
                        <Route path="/inquiries" element={<Inquiries />} />
                        <Route element={<ProtectedRoutes />}>
                          <Route path="/dashboard" element={<Dashboard />}>
                            <Route index element={<InquiryTickets />} />
                            <Route
                              path="/dashboard/tickets/edit/:id"
                              element={<EditTickets />}
                            />

                            <Route
                              path="/dashboard/users/:id"
                              element={<Users />}
                            />
                            <Route
                              path="/dashboard/users/add/:id"
                              element={<AddUser />}
                            />
                            <Route
                              path="/dashboard/users/edit/:id"
                              element={<EditUser />}
                            />
                            <Route
                              path="/dashboard/departments"
                              element={<Departments />}
                            />
                            <Route
                              path="/dashboard/departments/add"
                              element={<AddDepartments />}
                            />
                            <Route
                              path="/dashboard/departments/edit/:id"
                              element={<EditDepartment />}
                            />
                            <Route path="/dashboard/faqs" element={<FAQ />} />
                            <Route
                              path="/dashboard/faqs/add"
                              element={<AddFAQ />}
                            />
                            <Route
                              path="/dashboard/faqs/edit/:id"
                              element={<EditFAQ />}
                            />
                            <Route
                              path="/dashboard/inquiry-credentials"
                              element={<InquiryCredential />}
                            />
                            <Route
                              path="/dashboard/inquiry-credentials/add"
                              element={<AddInquiryCredential />}
                            />
                            <Route
                              path="/dashboard/inquiry-credentials/edit/:id"
                              element={<EditInquiryCredential />}
                            />

                            <Route
                              path="/dashboard/announcements"
                              element={<Announcement />}
                            />
                            <Route
                              path="/dashboard/announcements/add"
                              element={<AddAnnouncement />}
                            />
                            <Route
                              path="/dashboard/announcements/edit/:id"
                              element={<EditAnnouncement />}
                            />
                          </Route>
                        </Route>
                      </Routes>
                    </Router>
                  </InquiryTicketProvider>
                </AnnouncementProvider>
              </InquiryCredentialProvider>
            </FAQProvider>
          </UserProvider>
        </DepartmentProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
