export default function NewBlog() {
    return (
        <div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p></p>
                </div>
                <div>
                    <select name="type" id="type-blog">
                        <option value="">Choose type of blog</option>
                        <option value="Sport">Sport</option>
                        <option value="Travel">Travel</option>
                        <option value="Nature">Nature</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Life">Life</option>
                    </select>
                    <select name="visibility" id="type-visibility">
                        <option value="">Choose the visibility</option>
                        <option value="Public">Public</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
            </div>
            <div>
                <input type="text" />
                <img src="" alt="" />
            </div>
        </div>
    );
}