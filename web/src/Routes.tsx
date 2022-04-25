// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import OrganizationsLayout from 'src/layouts/OrganizationsLayout'
import RulesLayout from 'src/layouts/RulesLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={OrganizationsLayout}>
        <Route path="/organizations/new" page={OrganizationNewOrganizationPage} name="newOrganization" />
        <Route path="/organizations/{id}/edit" page={OrganizationEditOrganizationPage} name="editOrganization" />
        <Route path="/organizations/{id}" page={OrganizationOrganizationPage} name="organization" />
        <Route path="/organizations" page={OrganizationOrganizationsPage} name="organizations" />
      </Set>
      <Set wrap={RulesLayout}>
        <Route path="/rules/new" page={RuleNewRulePage} name="newRule" />
        <Route path="/rules/{id}/edit" page={RuleEditRulePage} name="editRule" />
        <Route path="/rules/{id}" page={RuleRulePage} name="rule" />
        <Route path="/rules" page={RuleRulesPage} name="rules" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        {/* <Route path="/location" page={LocationPage} name="location" /> */}
        {/* <Route path="/locations" page={LocationsPage} name="locations" /> */}
        {/* <Route path="/organization" page={OrganizationPage} name="organization" /> */}
        {/* <Route path="/organizations" page={OrganizationsPage} name="organizations" /> */}
        <Route path="/profile" page={ProfilePage} name="profile" />
        {/* <Route path="/rule" page={RulePage} name="rule" /> */}
        {/* <Route path="/rules" page={RulesPage} name="rules" /> */}
        <Route path="/settings" page={SettingsPage} name="settings" />
        {/* <Route path="/user" page={UserPage} name="user" /> */}
        {/* <Route path="/users" page={UsersPage} name="users" /> */}
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
