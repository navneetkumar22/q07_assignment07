let storyTitle = document.getElementById('title');
let storyImage = document.getElementById('image');
let storyAuthor = document.getElementById('author');
let storyDesc = document.getElementById('story');
let storyCategory = document.getElementById('category');

let storyDiv = document.querySelector('.story');

const publishStory = () => {

    storyDiv.innerHTML = '';

    storyDiv.innerHTML = `
            <div class="image">
                <img src="${storyImage.value}" alt="story_image">
            </div>
            <div class="text">
                <h3>${storyTitle.value}</h3>
                <p>${storyDesc.value}</p>
                <h4>Written By ${storyAuthor.value}</h4>
            </div>
                `

    //reset input fields
    storyImage.value = '';
    storyTitle.value = '';
    storyDesc.value = '';
    storyAuthor.value = '';
    storyCategory.value = '';
}

