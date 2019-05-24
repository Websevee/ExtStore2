using System;
using ExtStore2.Models;

namespace ExtStore2.DAL
{
    public class UnitOfWork : IDisposable
    {
        private ApplicationContext context = new ApplicationContext();
        private GenericRepository<Product> productRepository;
        private GenericRepository<CartItem> cartRepository;
        private GenericRepository<Order> orderRepository;

        public GenericRepository<Product> ProductRepository
        {
            get
            {

                if (this.productRepository == null)
                {
                    this.productRepository = new GenericRepository<Product>(context);
                }
                return productRepository;
            }
        }
        public GenericRepository<CartItem> CartRepository
        {
            get
            {

                if (this.cartRepository == null)
                {
                    this.cartRepository = new GenericRepository<CartItem>(context);
                }
                return cartRepository;
            }
        }
        public GenericRepository<Order> OrderRepository
        {
            get
            {

                if (this.orderRepository == null)
                {
                    this.orderRepository = new GenericRepository<Order>(context);
                }
                return orderRepository;
            }
        }



        public void Save()
        {
            context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}