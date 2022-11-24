let ManhwaDetails = [
  {
    title: "Solo Leveling(Volume 1)",
    price: "₹1,503.00",
  },
  {
    title: "Solo Leveling(Volume 2)",
    price: "₹1,400.00",
  },
  {
    title: "Solo Leveling(Volume 3)",
    price: "₹1,500.00",
  },
  {
    title: "Solo Leveling(Volume 4)",
    price: "₹1,550.00",
  },
  {
    title: "Solo Leveling(Volume 5)",
    price: "₹1,600.00",
  },
];
let commentsList = [
  {
    name: "xi jinping",
    commentTital: "Awesome",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5cOP3VofOQPerCiIu8d5lsFDzNVDNvnoww&usqp=CAU",
    comment:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nemo deleniti non at provident illo, ducimus mollitia explicabo quia fugiat omnis rem corporis possimus fuga voluptates dolorem repellat cum, quo veritatis?",
  },
  {
    name: "Vladimir Putin",
    commentTital: "Thrilling",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3znTxlmN4Lx7dmR5w-Wbvq4ygwnSttrmTrQ&usqp=CAU",
    comment:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nemo deleniti non at provident illo, ducimus mollitia explicabo quia fugiat omnis rem corporis possimus fuga voluptates dolorem repellat cum, quo veritatis?",
  },
  {
    name: "Elon Musk",
    commentTital: "Mind Blowing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU",
    comment:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nemo deleniti non at provident illo, ducimus mollitia explicabo quia fugiat omnis rem corporis possimus fuga voluptates dolorem repellat cum, quo veritatis?",
  },
  {
    name: "Narendra Modi",
    commentTital: "Avishvaniya",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9J3DJTLml_aj18YscpEwBKOnki5vudqP7Jg&usqp=CAU",
    comment:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nemo deleniti non at provident illo, ducimus mollitia explicabo quia fugiat omnis rem corporis possimus fuga voluptates dolorem repellat cum, quo veritatis?",
  },
];
function ManhwaCard(props) {
  return (
    <div className="col">
      <div className="card shadow">
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.details.title}</h5>
          <h6 className="card-subtitle mb-2">{props.details.price}</h6>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            eius pariatur consequuntur, quod totam soluta et aspernatur in
            labore nisi dolores quos tempore incidunt, omnis sapiente officiis
            ut aliquam deserunt.
          </p>
          <a
            href="https://www.amazon.in/Solo-Leveling-Vol-comic/dp/1975319435/ref=sr_1_1?crid=3MERJW79AKLUL&keywords=solo+leveling+volume+1&qid=1667804121&qu=eyJxc2MiOiIxLjYzIiwicXNhIjoiMS4yOSIsInFzcCI6IjEuMDAifQ%3D%3D&sprefix=solo+leveling+volume+6%2Caps%2C1011&sr=8-1"
            className="btn btn-dark"
            target="_blank"
          >
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
function Comment(props) {
  //console.log(props.commentDetail);
  return (
    <div className="card mb-3 w-60  shadow">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.commentDetail.image}
            className="img-fluid rounded-start w-100 h-100"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.commentDetail.commentTital}</h5>
            <p className="card-text">{props.commentDetail.comment}</p>
            <p className="card-text">
              <small className="text-muted">{props.commentDetail.name}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Main(props) {
  return (
    <main className="container-fluid">
      <h1 className="h-3 paperback-heading">Mahwa Paperback</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-3 manhwa-paperback">
        {props.images.map((image, index) => {
          return (
            <ManhwaCard
              key={index.toString()}
              image={image}
              details={ManhwaDetails[index]}
            />
          );
        })}
      </div>
      <h1 className="h-3 paperback-heading">Comments</h1>
      <div className="row gy-5 mb-5">
        {commentsList.map((comment, index) => {
          //console.log(comment);
          if (index % 2 === 0) {
            return (
              <div className="col-12">
                <Comment key={index.toString()} commentDetail={comment} />
              </div>
            );
          } else {
            return (
              <div className="col-12 d-flex justify-content-end">
                <Comment key={index.toString()} commentDetail={comment} />
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
