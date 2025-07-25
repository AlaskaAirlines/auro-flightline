# Semantic Release Automated Changelog

## [5.0.2](https://github.com/AlaskaAirlines/auro-flightline/compare/v5.0.1...v5.0.2) (2025-07-23)


### Bug Fixes

* add themeable type classes ([0f79ba5](https://github.com/AlaskaAirlines/auro-flightline/commit/0f79ba5778e5e556d08d05d5cbd95ddc1c8dd13b))
* update docs head content ([f468dba](https://github.com/AlaskaAirlines/auro-flightline/commit/f468dba5fd96ac94db327ec04cf9dd255ec270ab))
* update duration font size / class ([75519c7](https://github.com/AlaskaAirlines/auro-flightline/commit/75519c7e8343ca11b47c58e17bb9d11d32f26c8b))

## [5.0.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v5.0.0...v5.0.1) (2025-05-16)


### Bug Fixes

* add `reflect: true` on boolean props ([5a55f57](https://github.com/AlaskaAirlines/auro-flightline/commit/5a55f5768416bb048b103c7cf87e85dee5602f15))

# [5.0.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v4.0.1...v5.0.0) (2025-04-25)


### Features

* update to use new color theme tokens [#89](https://github.com/AlaskaAirlines/auro-flightline/issues/89) ([fc38e7f](https://github.com/AlaskaAirlines/auro-flightline/commit/fc38e7fbd7695155988d1b1c5fee27bae048296a))


### Performance Improvements

* update styles around duration text ([21f42d2](https://github.com/AlaskaAirlines/auro-flightline/commit/21f42d2ef0fce7e5fcd11ebf76a90844a44c3f35))


### BREAKING CHANGES

* auro-badge is no longer used to display duration text.

## [4.0.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v4.0.0...v4.0.1) (2025-04-15)


### Performance Improvements

* add wca script for docs api ([78cfe70](https://github.com/AlaskaAirlines/auro-flightline/commit/78cfe70d10f1bc6b7597fc2714c2ccd47388a5f6))

# [4.0.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.5...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([c6c7c37](https://github.com/AlaskaAirlines/auro-flightline/commit/c6c7c37187e7fba13141eb2844b9ad42a0a2f33f))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.1.5](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.4...v3.1.5) (2025-02-08)


### Performance Improvements

* update release asset ([533157d](https://github.com/AlaskaAirlines/auro-flightline/commit/533157d3ac42497e744326cfae0319c698fd0ec3))

## [3.1.4](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.3...v3.1.4) (2025-02-08)


### Performance Improvements

* update dependencies ([b08caf2](https://github.com/AlaskaAirlines/auro-flightline/commit/b08caf2352e92775b27f33e73b71eabae3680aeb))
* update mixin per new WCSS spec ([de10ef2](https://github.com/AlaskaAirlines/auro-flightline/commit/de10ef2f259c76130f00955aec25e3239190c049))

## [3.1.3](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.2...v3.1.3) (2025-01-07)


### Bug Fixes

* add querySelector closing bracket [#83](https://github.com/AlaskaAirlines/auro-flightline/issues/83) ([2842aab](https://github.com/AlaskaAirlines/auro-flightline/commit/2842aabb3862172cfd91e4174dc8feba8807697a))

## [3.1.2](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.1...v3.1.2) (2024-12-21)


### Performance Improvements

* update node to version 22 ([9285d39](https://github.com/AlaskaAirlines/auro-flightline/commit/9285d39a7e72a00d5a414b2da0ba5f09b8474c36))

## [3.1.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.1.0...v3.1.1) (2024-11-22)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#79](https://github.com/AlaskaAirlines/auro-flightline/issues/79) ([0014deb](https://github.com/AlaskaAirlines/auro-flightline/commit/0014deb0aa70f0dc9cba0d287f285f05a1eac3d0))


### Performance Improvements

* build updates to readme and api md [#79](https://github.com/AlaskaAirlines/auro-flightline/issues/79) ([fc13d54](https://github.com/AlaskaAirlines/auro-flightline/commit/fc13d54befc0a27f0817034de2b1f0c8e5fa4c81))
* update library to 3.0.2 ([a6bdc3a](https://github.com/AlaskaAirlines/auro-flightline/commit/a6bdc3afe7accaa663a156580b0a9758880fb1dd))

# [3.1.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.0.1...v3.1.0) (2024-10-24)


### Features

* **api:** add register static method [#77](https://github.com/AlaskaAirlines/auro-flightline/issues/77) ([e98de49](https://github.com/AlaskaAirlines/auro-flightline/commit/e98de49bcaeb8c47d5aa80d7af74b066e9efc284))

## [3.0.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v3.0.0...v3.0.1) (2024-10-17)


### Bug Fixes

* **ssr:** Add missing extension to badgeVersion import ([9256771](https://github.com/AlaskaAirlines/auro-flightline/commit/9256771c6b516a0ff052121aa6abf47c8206586a))

# [3.0.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.1.4...v3.0.0) (2024-10-02)


### Features

* add tag name as attribute when custom registered ([0b8a9e7](https://github.com/AlaskaAirlines/auro-flightline/commit/0b8a9e780d78940da9498e9119a211da19b8078d))
* implement tier 3 color tokens for theming support [#70](https://github.com/AlaskaAirlines/auro-flightline/issues/70) ([4f25758](https://github.com/AlaskaAirlines/auro-flightline/commit/4f25758f884a79b0174ab442e8cf139e5d9fe2d3))


### Performance Improvements

* **label:** remove github label colors ([d34ae75](https://github.com/AlaskaAirlines/auro-flightline/commit/d34ae759188fd040eb66ecdd8d13330f94b89101))
* refactor custom component registration config ([27e3f74](https://github.com/AlaskaAirlines/auro-flightline/commit/27e3f74839cc5a5699ed8a8be947528013a24747))
* update dependencies ([7bbb894](https://github.com/AlaskaAirlines/auro-flightline/commit/7bbb894d3acec91c223444b0e03312e5040b9a44))


### BREAKING CHANGES

* trigger major release for color theme support #70

## [2.1.4](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.1.3...v2.1.4) (2024-02-19)


### Bug Fixes

* **ts:** revert comment change in tsconfig ([89ccd61](https://github.com/AlaskaAirlines/auro-flightline/commit/89ccd6125c871e24802279c8938e3c3f93041979))


### Performance Improvements

* **demo:** update demo file example structure [#65](https://github.com/AlaskaAirlines/auro-flightline/issues/65) ([ba82c8c](https://github.com/AlaskaAirlines/auro-flightline/commit/ba82c8cf1ea7ab2b8a18bf87142ec43d969da2a6))
* **deps:** update dependencies ([f222b22](https://github.com/AlaskaAirlines/auro-flightline/commit/f222b229f0ee1c2169fc911f6cc788985ae3b29d))

## [2.1.3](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.1.2...v2.1.3) (2024-02-13)


### Performance Improvements

* update auro dependencies ([b5a963b](https://github.com/AlaskaAirlines/auro-flightline/commit/b5a963b3f96ce119f860b7b05ff97c967e7dbd58))

## [2.1.2](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.1.1...v2.1.2) (2024-02-11)


### Bug Fixes

* remove unavailable script ref ([bba06ad](https://github.com/AlaskaAirlines/auro-flightline/commit/bba06ad38bcae929cbe27d39a4ef5c44650c57be))


### Performance Improvements

* update auro deps and ESM support ready ([4246e41](https://github.com/AlaskaAirlines/auro-flightline/commit/4246e41c0431b3a91f2fc3e79aa0cc4acfcfd125))

## [2.1.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.1.0...v2.1.1) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([19de7a5](https://github.com/AlaskaAirlines/auro-flightline/commit/19de7a58804c5bcb1a9e8f31b76d170b620fc98f))

# [2.1.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.0.2...v2.1.0) (2024-01-22)


### Bug Fixes

* **ssr:** add missing type module to package.json ([d1b14fa](https://github.com/AlaskaAirlines/auro-flightline/commit/d1b14fa2aa76df8806254173dfbc320f47ae31cd))
* **ssr:** rename eslintrc file ([e6c0418](https://github.com/AlaskaAirlines/auro-flightline/commit/e6c0418489648d74030de487a4fc5292bcf937d9))


### Features

* add suport for SSR projects [#60](https://github.com/AlaskaAirlines/auro-flightline/issues/60) ([cb7a111](https://github.com/AlaskaAirlines/auro-flightline/commit/cb7a1118f05b008f7408e20042a8fd0e7e9a8ba5))

## [2.0.2](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.0.1...v2.0.2) (2023-12-02)


### Performance Improvements

* **token:** update token per new theming [#58](https://github.com/AlaskaAirlines/auro-flightline/issues/58) ([c10da97](https://github.com/AlaskaAirlines/auro-flightline/commit/c10da97eab1e15c71640235fca8a385a05a7c7f1))
* update dependencies and node support ([4a9f3f4](https://github.com/AlaskaAirlines/auro-flightline/commit/4a9f3f48a33b3683a4d9cd252cbf0a57824cfa02))

## [2.0.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v2.0.0...v2.0.1) (2023-08-03)


### Performance Improvements

* **deps:** update core dependencies ([d32445f](https://github.com/AlaskaAirlines/auro-flightline/commit/d32445f0d1b016ff4f1aac1ebd30ed3a0fab8931))

# [2.0.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.4.0...v2.0.0) (2023-08-02)


### Bug Fixes

* **demo:** update demo.md custom component html ([9e40bd4](https://github.com/AlaskaAirlines/auro-flightline/commit/9e40bd46fc3f70e4a09edc01b85241b6320f7dee))
* **postinstall:** renamed postinstall.js ([3a3cfac](https://github.com/AlaskaAirlines/auro-flightline/commit/3a3cfac288d2b0b7a3cbc25058d2627fe25080e0))
* **tsc:** update typo filename ([dc1e4d7](https://github.com/AlaskaAirlines/auro-flightline/commit/dc1e4d7cf44db8eb14cb3ef028da2b4a48a96d80))


### Documentation

* **npm:** Update npm namespace ([464c480](https://github.com/AlaskaAirlines/auro-flightline/commit/464c48018ef27cdbd4f930ad3a2b568e52b840cb))


### Features

* **cq:** remove custom container query support [#56](https://github.com/AlaskaAirlines/auro-flightline/issues/56) ([4ea9bd5](https://github.com/AlaskaAirlines/auro-flightline/commit/4ea9bd50ca7dc12031fa16697cd7d987b2102dfd))
* **customize:** update component registration [#45](https://github.com/AlaskaAirlines/auro-flightline/issues/45) ([c1ae11e](https://github.com/AlaskaAirlines/auro-flightline/commit/c1ae11e0db69f0e8b2bae6c4e7ea147aa018e43b))
* **typescript:** add typescript support [#45](https://github.com/AlaskaAirlines/auro-flightline/issues/45) ([32d54a0](https://github.com/AlaskaAirlines/auro-flightline/commit/32d54a0ab07cbd577a7ed8575fc4cc8fa5e40f31))


### Performance Improvements

* add build:watch command npm script ([439d434](https://github.com/AlaskaAirlines/auro-flightline/commit/439d4342b4ef80f2a1d0eaab0074a44392576815))
* **es5:** Remove legacy es5 bundling resource [#44](https://github.com/AlaskaAirlines/auro-flightline/issues/44) ([781a79b](https://github.com/AlaskaAirlines/auro-flightline/commit/781a79b41ca22cc650cd48196ed8a6b7a9c7be76))
* **husky:** pre-commit and husky update [#45](https://github.com/AlaskaAirlines/auro-flightline/issues/45) ([70f1edd](https://github.com/AlaskaAirlines/auro-flightline/commit/70f1eddbe87067860e4b0a4abbc7bb7c314ef37c))
* **husky:** update config to support linters ([6397945](https://github.com/AlaskaAirlines/auro-flightline/commit/63979453b6db20e3b53fea0058670c23923caf09))
* **lit:** update to Lit2.0 [#45](https://github.com/AlaskaAirlines/auro-flightline/issues/45) ([0bb2505](https://github.com/AlaskaAirlines/auro-flightline/commit/0bb2505ac5b2be7355e181c30bbdc362bde4c184))
* **node18:** update to support Node 18++ [#46](https://github.com/AlaskaAirlines/auro-flightline/issues/46) ([107791d](https://github.com/AlaskaAirlines/auro-flightline/commit/107791d808fd73b4d29c0283735d5fc9200f4c85))
* **sass:** Update to use dart-sass dependency ([6012dc1](https://github.com/AlaskaAirlines/auro-flightline/commit/6012dc10707ffd9e6ba955caff30aeacbf226588))
* **server:** update to use single shell [#53](https://github.com/AlaskaAirlines/auro-flightline/issues/53) ([1418d25](https://github.com/AlaskaAirlines/auro-flightline/commit/1418d25a6b41ec153f16582a5679dcbbce364e22))


### BREAKING CHANGES

* **cq:** This commit removes the custom built
container query support and replaces it with standard
CSS container query support.

This commit also REMOVES the custom `cq` attribute as this
is no longer supported. The default `414px` width was replaced
with the standard `auro-grid-breakpoint-xs` token.

Changes to be committed:
modified:   docs/api.md
modified:   src/auro-flightline.js
deleted:    src/observer.js
modified:   src/style-flightline.scss
modified:   test/auro-flightline.test.js
* **npm:** This update will redefine the npm namespace
for the auro-flightline element.

Changes to be committed:
	modified:   package.json

# [1.4.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.3.1...v1.4.0) (2023-01-04)


### Features

* **nextday:** add new nextDay attribute [#42](https://github.com/AlaskaAirlines/auro-flightline/issues/42) ([ca40ccf](https://github.com/AlaskaAirlines/auro-flightline/commit/ca40ccf674e2a48868bef7946043a146b92f245a))

## [1.3.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.3.0...v1.3.1) (2022-01-27)


### Bug Fixes

* prevent summary segment overflow ([f3fe328](https://github.com/AlaskaAirlines/auro-flightline/commit/f3fe328b17d13e9a3362c34a55649f26569ad00f))

# [1.3.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.2.0...v1.3.0) (2022-01-26)


### Features

* add canceled segment ([3146c6c](https://github.com/AlaskaAirlines/auro-flightline/commit/3146c6c411214963ca9c4b8696baf79aebd03ad7))
* mark all segments canceled when flightline canceled ([9ceb4e8](https://github.com/AlaskaAirlines/auro-flightline/commit/9ceb4e85adb5777833e2b0606f9b3c320278e64f))

# [1.2.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.1.4...v1.2.0) (2021-12-23)


### Features

* add breakpoint prop ([16b22a4](https://github.com/AlaskaAirlines/auro-flightline/commit/16b22a4c7a95ca30a4182d24faeae487acf6cfe3))
* switch to condensed view based on container width ([916b7cc](https://github.com/AlaskaAirlines/auro-flightline/commit/916b7cc30b845047824d957e5f1d99b7c4c33f2f))

## [1.1.4](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.1.3...v1.1.4) (2021-11-09)


### Bug Fixes

* **css:** remove tokens from generated CSS file [#17](https://github.com/AlaskaAirlines/auro-flightline/issues/17) ([161439e](https://github.com/AlaskaAirlines/auro-flightline/commit/161439e6333dcb35d195f28fa4e8770ef45f5c6d))
* default booleans to false ([a49add6](https://github.com/AlaskaAirlines/auro-flightline/commit/a49add6f285c6d315b9540f3805874ed68407ba7))
* stop reading out '.' to screen readers [#21](https://github.com/AlaskaAirlines/auro-flightline/issues/21) ([9b2f723](https://github.com/AlaskaAirlines/auro-flightline/commit/9b2f723ef62aea668157fb9b0eaf8150d4bea779))

## [1.1.3](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.1.2...v1.1.3) (2021-06-24)


### Bug Fixes

* **stop:** mobile stop size decreased ([2fcf0d2](https://github.com/AlaskaAirlines/auro-flightline/commit/2fcf0d2b761175035513151181b8596228b80d14))

## [1.1.2](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.1.1...v1.1.2) (2021-06-21)


### Bug Fixes

* **a11y:** adds layover readout for screenreaders [#13](https://github.com/AlaskaAirlines/auro-flightline/issues/13) ([2721739](https://github.com/AlaskaAirlines/auro-flightline/commit/2721739cd3e6dd3d993624cc9d0050c181d1d7b3))

## [1.1.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.1.0...v1.1.1) (2021-06-18)


### Bug Fixes

* prevent z-index from overlapping header [#7](https://github.com/AlaskaAirlines/auro-flightline/issues/7) ([4e7d755](https://github.com/AlaskaAirlines/auro-flightline/commit/4e7d755759a36b5b8c72babb2e1f7e73cb1b991b))

# [1.1.0](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.0.1...v1.1.0) (2021-06-15)


### Features

* add a new canceled status ([c6dd5e7](https://github.com/AlaskaAirlines/auro-flightline/commit/c6dd5e7094cf26325f1ad936bba741eb1c10ac67))

## [1.0.1](https://github.com/AlaskaAirlines/auro-flightline/compare/v1.0.0...v1.0.1) (2021-02-09)


### Bug Fixes

* update style spec ([5081a8a](https://github.com/AlaskaAirlines/auro-flightline/commit/5081a8a77e853fc5f95b81f20f5c416ba771fc89))

# 1.0.0 (2021-02-08)


### Features

* adds initial auro-flight-segment ([8cba6fc](https://github.com/AlaskaAirlines/auro-flightline/commit/8cba6fcb252928e703bccb0ba98067da28b8d8fc))
