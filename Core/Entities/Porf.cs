namespace Core.Entities
{

    public class Porf : BaseEntity
    {

        public string Name { get; set; }
        public string Article { get; set; }
        public string Imageurl { get; set; }
        public string Videourl { get; set; }
        public PorfType PorfType { get; set; }

        public int PorfTypeId { get; set; }
    }

}