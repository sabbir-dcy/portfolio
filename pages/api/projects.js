export default async function handler(req, res) {
  const name = req.query.name
  const projects = [
    {
      name: 'tsushima-production',
      title: 'manufacturer website',
      link: 'https://tsushima-corporation.web.app',
      desc: [
        {
          feature:
            'website of a bike/bycicle parts manufacturer comapany. Website contains home, dashboard and blog page. any user on the internet can access the website and see the parts on home page. however, parts can be ordered only after login.',
        },
        {
          feature:
            'user and admin based routing. admin can not purchase product and can not review himself. on other hand user can not access admin panel.userjwt and admin jwt added for that. if any user or admin watn to access unauthorized route he will be redirect to home page',
        },
        {
          feature:
            'logged in uesr can access dashboard with limited route. can rate us, see ordered parts. Admin can not access this routes. but admin can manage orders, parts and user. Admin can confirm shipping if user pay for the parts.',
        },
        {
          feature:
            'added modal where needed, tried to achieve material design, maintain color combination and responsiveness. added table for admin panel which is handy for mobile view also',
        },
        {
          feature:
            'added extra two sections on home page. one section is for premium membership. an user can get premium membership by submiting their email, but an user need to login atleast once in our website to get premium membership. Another section is faq. this is nothing fancy. just some frequently asked question from users',
        },
      ],
      bg: 'bg-purple-200',
      _id: '001',
    },
    {
      name: 'offshore-stockroom',
      title: 'warehouse management website',
      link: 'https://offshore-stockroom.web.app',
      desc: [
        {
          feature:
            'admin/user can see the website homepage and login page initially. after login an access token will generate for that particular user. to manage 6 items in the home page user have to verify his email.',
        },
        {
          feature:
            "verifyied user can manage top 6 inventory item, user can restock them and view detailed information. also, user can watch his/her included products in my liquor section. these are the products that will be fetched from server filtering user's email address.",
        },
        {
          feature:
            'any of the logged in user can add products to the server with proper information. and user can delete item from manage and my inventory route. deleting from there means making the item stock out.',
        },
        {
          feature:
            'some ux realated features are, before delating any of the item user will get a modal popup. there user have to type confirm in order to delete the item. another feature, user can reset password by cliking foget password option. if he havent recieved mail he can send it again. however, new user can verify account while registration process. a verification email will be sent to his email account.',
        },
      ],
      bg: 'bg-orange-200',
      _id: '002',
    },
    {
      name: 'font-bey',
      title: 'font searching website',
      link: 'https://fontbey.netlify.app/',
      desc: [{feature:''}],
      bg: 'bg-blue-200',
      _id: '003',
    },
  ]
  const project = projects.find((project) => project.name === name)
  res.status(200).json(project)
}
