<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="http://www.playtracewith.me/">
    <img src="https://github.com/RebeccaL23/trace/blob/master/app/assets/images/logo.png" alt="Logo" width="180" height="50">
  </a>

  <h3 align="center">Merging the digital and real-world experience through scavenger hunt games</h3>

  <p align="center">
    <br />
    <a href="https://github.com/RebeccaL23/trace"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.youtube.com/watch?v=X2IFL4Ev69c&list=PLkbmdtbypn7TaaSLn0twxAxZ1FIiu6PIS&index=4">View the Le Wagon demonstration/presentation</a>
    ·
    <a href="https://github.com/RebeccaL23/trace/issues">Report Bug</a>
    ·
    <a href="https://github.com/RebeccaL23/trace/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About the Project</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments-and-contact">Acknowledgments & Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

#### Merging the digital and real-world experience through scavenger hunt games

It can be challenging to plan and manage group activities that are fun, interactive, cost-efficient and educational (if you want it to be). Trace allows for users to custom-create scavenger hunt games.

*Ideation & pitch*<br>
<img src="https://user-images.githubusercontent.com/17685311/175009222-8f30df8d-6d5c-435c-b3a9-181abf8796c0.jpg" alt="use cases" width="550">

*Trace can be used by*
* **Companies** for team-building work activities
* **Schools** for trips and excursions
* **Governments and councils** to arrange educational city tours
* **Friends** for group social activities

*How it works*
1. Make a new game                                                   
2. Plot out the challenges, points and locations across the map
3. Share the unique game code with players
4. Players complete challenges by visiting each location and answering questions
5. Highest score and best time wins!

####  The admin/organiser experience on Trace
<img src="https://user-images.githubusercontent.com/17685311/175007688-7eb72b23-55f3-4e28-9f74-2a014c8648d7.gif" width="400">

#### The player experience on Trace
<img src="https://user-images.githubusercontent.com/17685311/175008172-e312c2b5-c2e5-456e-bcc8-ffddd8aeb840.gif" width="180">

<p align="right">(<a href="#top">back to top</a>)</p>

### Tech stack

Trace was designed for a desktop experience for admins and organisers, and a mobile experience for players.

Frameworks & libraries used to make Trace
* [Ruby on Rails](https://rubyonrails.org/)
* [JavaScript](https://www.javascript.com/)
* [CSS & SASS](https://sass-lang.com/)
* [Bootstrap](https://getbootstrap.com/)
* [Stimulus](https://stimulus.hotwired.dev/)
* [Mapbox API](https://docs.mapbox.com/api/overview/)
* [Open Weather API](https://openweathermap.org/api)

Version control & deployment
* [GitHub] (https://github.com/RebeccaL23/trace)
* [Heroku] (https://trace-game.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

#### Setup

0. In order to run our app locally, you will need to have already installed Yarn and Rails. Check them with:
  

```
$ yarn -v
$ rails --version
```

If no version number is returned, please install [Yarn](https://classic.yarnpkg.com/en/docs/install) and/or [Rails](https://guides.rubyonrails.org/v5.0/getting_started.html) before continuing.

#### Dependencies

1. You'll also need to install all dependencies of the project with:
```
$ bundle install && yarn install
```

The `bundle` command installs all Ruby Gems specified in our Gemfile. The `yarn install` command retrieves all dependencies from the project’s package.json file.
<br> 
<br>

2. Run the following command to create a database, load the schema, and initialize it with our seed data.
```
$ rails db:create db:migrate db:seed
```

#### API Keys

3. Lastly, our API keys are hidden. You will need to `touch` a `.env` file and populate it with your own [Mapbox](https://docs.mapbox.com/help/getting-started/access-tokens/), [Open Weather](https://openweathermap.org/api) and [Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference) API keys.
 
#### Launch 🚀

Finally! Lets launch the app by running:

```
$ rails s
```

```
$ yarn build --watch
```

Then go to [localhost:3000](http://localhost:3000/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

Admin 
- [ ] Include other challenge formats (e.g. QR code, snap a photo) to allow for further interactivity. Photo challenges can be replayed back to the players at the end of the game.

Player
- [ ] Update geo-location functionality to enable/disable challenge completion based on location proximity

General
- [ ] Responsiveness across desktop, tablet and mobile

See the [open issues](https://github.com/RebeccaL23/trace/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Created as part of the Le Wagon Fullstack Web Development program. Feel free to fork and enhance the platform! We're open to all updates and suggestions :)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS & CONTACT -->
## Acknowledgments and Contact

Made with love by: 
* Adrian Hards
  * Check me out on Github https://github.com/adrianHards
* Borhan Boulandier 
  * Check me out on Github https://github.com/BsBou
* Rebecca Lim
  * Check me out on Github https://github.com/RebeccaL23

<img width="400" alt="Screen Shot 2022-06-22 at 11 44 54 am" src="https://user-images.githubusercontent.com/17685311/175012728-96535632-f308-45f7-a7a7-8c16407d90c2.png">

<p align="right">(<a href="#top">back to top</a>)</p>

<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=RebeccaL23/trace" id="counter">
</p>

