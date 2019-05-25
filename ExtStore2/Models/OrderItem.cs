namespace ExtStore2.Models
{
    public class OrderItem
    {
        public int Id { get; set; }

        public int OrderId { get; set; }
        public int ProductId { get; set; }
        public int ItemsCount { get; set; }
        public int ItemPrice { get; set; }

        //public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }
    }
}