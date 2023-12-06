AFRAME.registerComponent('posters', {
    init: function() {
        this.placesContainer = this.el;
        this.createCards();
    },

    createCards: function() {
        const thumbnailsRef = [
            {
                id: 'captain-america',
                title: 'Captain America',
                url: 'captain_america.png',
            },
            {
                id: 'joker',
                title: 'Joker',
                url: 'joker.png',
            },
            {
                id: 'spiderman',
                title: 'Spiderman',
                url: 'spiderman.png',
            },
            {
                id: 'superman',
                title: 'Superman',
                url: 'superman.png',
            },
        ];
        let previousXPosition = -60;

    for (var item of thumbnailsRef) {
      const posX = previousXPosition + 125;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
    },

    createBorder: function(position, id) {
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('id', id);
        entityEl.setAttribute('visible', true);
        entityEl.setAttribute('geometry', {
            primitive: 'ring',
            radiusInner: 9,
            radiusOuter: 10
        });
        entityEl.setAttribute('position', position);
        entityEl.setAttribute('material', {
            color: '#4b9ac1',
            opacity: 0.4
        });
        return entityEl;
    },

    createThumbnail: function(item) {
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('visible', true);
        entityEl.setAttribute('geometry', {
            primitive: 'circle',
            radius: 9
        });
        entityEl.setAttribute('material', {src: item.url});
        return entityEl;
    },

    createTitleEl: function(position, item) {
        const entityEl = document.createElement('a-entity');
        entityEl.setAttribute('text', {
            font: 'exo2bold',
            align: 'center',
            width: 60,
            color: '#53963d',
            value: item.title
        });
        const elPosition = position;
        elPosition.y = -20;
        entityEl.setAttribute('position', elPosition);
        entityEl.setAttribute('visible', true);
        return entityEl;
    }
})