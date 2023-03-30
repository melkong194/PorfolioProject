namespace Core.Entities
{

    public class Post : BaseEntity
    {
        public string Name { get; set; }
        public string Article { get; set; }
        public string Imageurl { get; set; }
        public string Videourl { get; set; }
        public PostType PostType { get; set; }

        public int PostTypeId { get; set; }

    }

}